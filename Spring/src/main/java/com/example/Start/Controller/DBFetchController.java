package com.example.Start.Controller;

import com.example.Start.Entities.*;

import java.io.IOException;
import java.util.ArrayList;

import com.example.Start.Repositories.CategoryRepository;
import com.example.Start.Repositories.NotificationRepository;
import com.example.Start.Repositories.SubNotificationRepository;
import com.example.Start.Repositories.SubcategoryRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/DBFetch")
public class DBFetchController {

	private ArrayList<Category> Categories;
	private ArrayList<CategoryWithSubcategory> CatWithSub;
	private ArrayList<SubCategory> SubCategories;
	private ArrayList<Notification> Notifications;
	private ArrayList<SubNotification> SubNotification;
	private ArrayList<String> SubCategoryUrl = new ArrayList<String>();
	private ArrayList<String> NotificationsUrl = new ArrayList<String>();

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private SubcategoryRepository subcategoryRepository;

	@Autowired
	private NotificationRepository notificationRepository;

	@Autowired
	private SubNotificationRepository subnotificationRepository;
	@RequestMapping("/categories")
	public ArrayList<Category> getCategories() throws IOException {
		Categories = new ArrayList<Category>();
		Categories = (ArrayList<Category>) categoryRepository.findAll();
		return Categories;
	}

	@GetMapping("/categories/{id}")
	public ArrayList<SubCategory> getSubCategories(@PathVariable int id) throws IOException {
		SubCategories = new ArrayList<SubCategory>();
		if (id > 2) {
			return null;
		}
		Long Lid = Long.valueOf(id);
		SubCategories = (ArrayList<SubCategory>) subcategoryRepository.findByCategoryId(Lid);
		return SubCategories;

	}


	@GetMapping("/notificationfromsub/{id}")
	public ArrayList<SubNotification> getNotifications(@PathVariable int id) throws IOException {
		SubNotification = new ArrayList<SubNotification>();
		Long Lid = Long.valueOf(id);
		SubNotification = (ArrayList<SubNotification>) subnotificationRepository.findBySubcategoryId(Lid);
		return SubNotification;

	}


	@GetMapping("/notification/{id}")
	public ArrayList<Notification> GetNotifications(@PathVariable int id) throws IOException {
		Notifications = new ArrayList<Notification>();
		Long Lid = Long.valueOf(id);
		Notifications = (ArrayList<Notification>) notificationRepository.findByCategoryId(Lid);
		return Notifications;


	}


	@GetMapping("/detailsSub/{id}")
	public ArrayList<String> getDetailSub(@PathVariable int id) throws IOException {
	    Document DescDoc = Jsoup.connect("http://www.njoftime.com/" + SubNotification.get(id - 1).getUrl()).get();
            String DescEl = DescDoc.selectFirst("div.content").html();
            ArrayList<String> d = new ArrayList<String>();
            d.add(DescEl);
            return d;
	}

	@GetMapping("/details/{id}")
	public ArrayList<String> getDetail(@PathVariable int id) throws IOException {
		Document Notdoc = Jsoup.connect("http://www.njoftime.com/" + Notifications.get(id - 1).getUrl()).get();
                String DescEl = Notdoc.selectFirst("div.content").html();
                ArrayList<String> d = new ArrayList<String>();
                return d;
	}
}
