package com.example.Start.Controller;

import com.example.Start.Entities.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Optional;

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
@RequestMapping("/api/scrapper")
public class ScrapperController {

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
            Document doc;
            doc = Jsoup.connect("http://www.njoftime.com/").get();
            Elements forums = doc.select("ol#forums");
            int index = 0;
            for (Element element : forums.select("h2.forumtitle")) {
                index++;
                if (index > -1) {
                    for (Element Title : element.select("a")) {
                        String T = Title.select("a").html();
                        String title = T.replace("&amp;", "&");
                        if(categoryRepository.existsByTitle(title)){
                                Category temp = categoryRepository.findByTitle(title);
                                Categories.add(temp);
                        }else{
                                String url = Title.select("a").attr("href");
                                Category temp = new Category(title, url, index);
                                categoryRepository.save(temp);
                                Categories.add(temp);
                        }
                    }
                }
            }
            return Categories;

	}

	@GetMapping("/categories/{id}")
	public ArrayList<SubCategory> getSubCategories(@PathVariable int id) throws IOException {
            SubCategories = new ArrayList<SubCategory>();
            if (id > 2) {
                return null;
            }
            Document Subdoc = Jsoup.connect("http://www.njoftime.com/" + Categories.get(id - 1).getUrl()).get();
            int index = 0;
            Elements SubEl = Subdoc.select("ol");
            for (Element subelement : SubEl.select("h2 > a")) {
                index++;
                String SubTitle = subelement.select("a").html();
                SubTitle = SubTitle.replace("&amp;", "&");
                SubCategory sb = subcategoryRepository.findByTitle(SubTitle);
                if(sb != null){
                    SubCategories.add(sb);
                }else{
                    String notificationurl = subelement.select("a").attr("href");
                    String NotificationUrl = notificationurl.substring(0, notificationurl.indexOf('&'));
                    Long Lid = Long.valueOf(id);
                    Optional<Category> parent = categoryRepository.findById(Lid);
                    SubCategory sb1 = new SubCategory(SubTitle, NotificationUrl, index);
                    sb1.setCategory(parent.get());

                    subcategoryRepository.save(sb1);
                    SubCategories.add(sb1);
                }

            }
            return SubCategories;

	}


	@GetMapping("/notificationfromsub/{id}")
	public ArrayList<SubNotification> getNotifications(@PathVariable int id) throws IOException {
            Document Notdoc = Jsoup.connect("http://www.njoftime.com/" + SubCategories.get(id - 1).getUrl()).get();
            SubNotification = new ArrayList<SubNotification>();
            Elements NotEl = Notdoc.select("ol");
            int index = 0;
            for (Element notelement : NotEl.select("h3 > a")) {
                index ++;
                String notname = notelement.select("a").html();
                SubNotification sn = subnotificationRepository.findByTitle(notname);
                if(sn != null){
                    SubNotification.add(sn);
                }else{
                    String descurl = notelement.select("a").attr("href");
                    System.out.print(descurl+"111");
                    Long Lid = Long.valueOf(id);
                    Optional<SubCategory> parent = subcategoryRepository.findById(Lid);
                    SubNotification n = new SubNotification(notname,descurl,index);
                    n.setSubCategory(parent.get());
                    SubNotification.add(n);
                    subnotificationRepository.save(n);
                }

            }
            return SubNotification;

	}


	@GetMapping("/notification/{id}")
	public ArrayList<Notification> GetNotifications(@PathVariable int id) throws IOException {
            Document Notdoc = Jsoup.connect("http://www.njoftime.com/" + Categories.get(id-1).getUrl()).get();
            Notifications = new ArrayList<Notification>();
            int index =0;
            Elements NotEl = Notdoc.select("ol");
            for (Element notelement : NotEl.select("h3 > a")) {
                index++;
                String notname = notelement.select("a").html();
                        
                Notification n = notificationRepository.findByTitle(notname);
                if(n != null){
                    Notifications.add(n);
                }else{
                    String descurl = notelement.select("a").attr("href");
                    Long Lid = Long.valueOf(id);
                    Optional<Category> parent = categoryRepository.findById(Lid);
                    Notification n1 = new Notification(notname,descurl,index);
                    n.setCategory(parent.get());
                    Notifications.add(n1);
                    notificationRepository.save(n1);
                }

            }
            return Notifications;
	}


	@GetMapping("/detailsSub/{id}")
	public ArrayList<String> getDetailSub(@PathVariable int id) throws IOException {
	    Document DescDoc = Jsoup.connect("http://www.njoftime.com/" + SubNotification.get(id - 1).getUrl()).get();
            String DescEl = DescDoc.selectFirst("div.content").html();
            Long Lid = Long.valueOf(id);
            Optional<SubNotification> n = subnotificationRepository.findById(Lid);
            if(n.get().getDetails() == null){
                n.get().setDetails(DescEl);
            }
            ArrayList<String> d = new ArrayList<String>();
            d.add(DescEl);
            return d;
	}

	@GetMapping("/details/{id}")
	public ArrayList<String> getDetail(@PathVariable int id) throws IOException {
            Document Notdoc = Jsoup.connect("http://www.njoftime.com/" + Notifications.get(id - 1).getUrl()).get();
            String DescEl = Notdoc.selectFirst("div.content").html();
            Long Lid = Long.valueOf(id);
            Optional<Notification> n = notificationRepository.findById(Lid);
            if(n.get().getDetails() == null){
                n.get().setDetails(DescEl);
            }
            ArrayList<String> d = new ArrayList<String>();
            d.add(DescEl);
            return d;
	}
}
