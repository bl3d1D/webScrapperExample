-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: notificationDB
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Notification`
--

DROP TABLE IF EXISTS `Notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nindex` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `details` text,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK7ec6pxl86r9uv4w74wpddirtq` (`category_id`),
  CONSTRAINT `FK7ec6pxl86r9uv4w74wpddirtq` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Notification`
--

LOCK TABLES `Notification` WRITE;
/*!40000 ALTER TABLE `Notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `Notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Cindex` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,1,'Imobiliare & Real Estate & Patundshmëri','forumdisplay.php?41-Imobiliare-amp-Real-Estate-amp-Patundshmëri&s=2e919ae05385c8cd7c92c87d886abf67'),(2,2,'Automjete & Motora & Mjete lundrimi & Rent a Car','forumdisplay.php?3-Automjete-amp-Motora-amp-Mjete-lundrimi-amp-Rent-a-Car&s=2e919ae05385c8cd7c92c87d886abf67'),(3,3,'ofroj vende pune','forumdisplay.php?14-ofroj-vende-pune&s=2e919ae05385c8cd7c92c87d886abf67'),(4,4,'oferta pune Premium','forumdisplay.php?44-oferta-pune-Premium&s=2e919ae05385c8cd7c92c87d886abf67'),(5,5,'Puna Juaj','forumdisplay.php?58-Puna-Juaj&s=2e919ae05385c8cd7c92c87d886abf67'),(6,6,'kërkoj vend pune','forumdisplay.php?35-kërkoj-vend-pune&s=2e919ae05385c8cd7c92c87d886abf67'),(7,7,'Kurse profesionale & Arsim','forumdisplay.php?31-Kurse-profesionale-amp-Arsim&s=2e919ae05385c8cd7c92c87d886abf67'),(8,8,'Kompjutera & Laptop','forumdisplay.php?21-Kompjutera-amp-Laptop&s=2e919ae05385c8cd7c92c87d886abf67'),(9,9,'Telefona & Smartphone','forumdisplay.php?24-Telefona-amp-Smartphone&s=2e919ae05385c8cd7c92c87d886abf67'),(10,10,'TV & Multimedia','forumdisplay.php?51-TV-amp-Multimedia&s=2e919ae05385c8cd7c92c87d886abf67'),(11,11,'Elektro-shtëpiake','forumdisplay.php?23-Elektro-shtëpiake&s=2e919ae05385c8cd7c92c87d886abf67'),(12,12,'Turizëm','forumdisplay.php?15-Turizëm&s=2e919ae05385c8cd7c92c87d886abf67'),(13,13,'Turizëm & Hotele & Objekte me qera afatshkurter','forumdisplay.php?5-Turizëm-amp-Hotele-amp-Objekte-me-qera-afatshkurter&s=2e919ae05385c8cd7c92c87d886abf67'),(14,14,'Biznese & Shërbime','forumdisplay.php?43-Biznese-amp-Shërbime&s=2e919ae05385c8cd7c92c87d886abf67'),(15,15,'Biznesi','forumdisplay.php?19-Biznesi&s=2e919ae05385c8cd7c92c87d886abf67'),(16,16,'Tendera & Ankande & Ftesa për Ofertë','forumdisplay.php?11-Tendera-amp-Ankande-amp-Ftesa-për-Ofertë&s=2e919ae05385c8cd7c92c87d886abf67'),(17,17,'Foto & Kamera','forumdisplay.php?25-Foto-amp-Kamera&s=2e919ae05385c8cd7c92c87d886abf67'),(18,18,'Mobilje','forumdisplay.php?10-Mobilje&s=2e919ae05385c8cd7c92c87d886abf67'),(19,19,'Bicikleta','forumdisplay.php?55-Bicikleta&s=2e919ae05385c8cd7c92c87d886abf67'),(20,20,'Pajisje dhe aparatura mjekësore','forumdisplay.php?50-Pajisje-dhe-aparatura-mjekësore&s=2e919ae05385c8cd7c92c87d886abf67'),(21,21,'Bebet dhe Fëmijët','forumdisplay.php?12-Bebet-dhe-Fëmijët&s=2e919ae05385c8cd7c92c87d886abf67'),(22,22,'Libra & Muzikë & Filma & Lojra','forumdisplay.php?6-Libra-amp-Muzikë-amp-Filma-amp-Lojra&s=2e919ae05385c8cd7c92c87d886abf67'),(23,23,'Të ndryshme','forumdisplay.php?20-Të-ndryshme&s=2e919ae05385c8cd7c92c87d886abf67'),(24,24,'Faqe shqiptare në internet','forumdisplay.php?32-Faqe-shqiptare-në-internet&s=2e919ae05385c8cd7c92c87d886abf67');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (2,'ROLE_ADMIN'),(1,'ROLE_USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategory`
--

DROP TABLE IF EXISTS `subcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `SCindex` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe4hdbsmrx9bs9gpj1fh4mg0ku` (`category_id`),
  CONSTRAINT `FKe4hdbsmrx9bs9gpj1fh4mg0ku` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,'Objekte banimi - për shitje','forumdisplay.php?4-Objekte-banimi-për-shitje',1,1),(2,'Objekte banimi - me qera','forumdisplay.php?36-Objekte-banimi-me-qera',2,1),(3,'Objekte biznesi - për shitje','forumdisplay.php?37-Objekte-biznesi-për-shitje',3,1),(4,'Objekte biznesi - me qera','forumdisplay.php?38-Objekte-biznesi-me-qera',4,1),(5,'aktivitet biznesi - shitje/qera','forumdisplay.php?57-aktivitet-biznesi-shitje-qera',5,1),(6,'Truall','forumdisplay.php?39-Truall',6,1),(7,'Turizëm & Hotele & Objekte me qera afatshkurter','forumdisplay.php?53-Turizëm-amp-Hotele-amp-Objekte-me-qera-afatshkurter',7,1),(8,'Kërkesa - per blerje, marrje me qera, ndërrim','forumdisplay.php?40-Kërkesa-per-blerje-marrje-me-qera-ndërrim',8,1);
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subnotification`
--

DROP TABLE IF EXISTS `subnotification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subnotification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `SNindex` int(11) DEFAULT NULL,
  `details` text,
  `subcategory_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtek6yc9tcc6ajwmn4fifs7spd` (`subcategory_id`),
  CONSTRAINT `FKtek6yc9tcc6ajwmn4fifs7spd` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subnotification`
--

LOCK TABLES `subnotification` WRITE;
/*!40000 ALTER TABLE `subnotification` DISABLE KEYS */;
INSERT INTO `subnotification` VALUES (1,'Tirane, jap me qera apartament 1+1+BLK Kati 4, 350 Euro/muaj (Bulevardi Zogu i Pare)','showthread.php?427078-Tirane-jap-me-qera-apartament-1-1-BLK-Kati-4-350-Euro-muaj-(Bulevardi-Zogu-i-Pare)&s=2e919ae05385c8cd7c92c87d886abf67',1,NULL,2),(2,'Tirane, jap me qera apartament 2+1+2 BLK Kati 4, 102 m² 480 Euro (Rruga Perlat Rexhepi (pranë Librit Universitar - mbi TIKI BAR))','showthread.php?128127-Tirane-jap-me-qera-apartament-2-1-2-BLK-Kati-4-102-m²-480-Euro-(Rruga-Perlat-Rexhepi-(pranë-Librit-Universitar-mbi-TIKI-BAR))&s=2e919ae05385c8cd7c92c87d886abf67',2,NULL,2),(3,'Tirane, jap me qera vile rezidenciale 1350 m2 7800 Euro/muaj','showthread.php?398152-Tirane-jap-me-qera-vile-rezidenciale-1350-m2-7800-Euro-muaj&s=2e919ae05385c8cd7c92c87d886abf67',3,NULL,2);
/*!40000 ALTER TABLE `subnotification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_notification`
--

DROP TABLE IF EXISTS `user_notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_notification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_notification`
--

LOCK TABLES `user_notification` WRITE;
/*!40000 ALTER TABLE `user_notification` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
  CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,1);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userposts`
--

DROP TABLE IF EXISTS `userposts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userposts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `descritpion` text,
  `aproved` int(1) DEFAULT NULL,
  `description` text,
  `subcategory_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK4v0j4ufj1v6xrcf6pp4t4r9ss` (`category_id`),
  KEY `FKcpchud1i8xcryn97ldm2ehjw7` (`subcategory_id`),
  CONSTRAINT `FK4v0j4ufj1v6xrcf6pp4t4r9ss` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `FKcpchud1i8xcryn97ldm2ehjw7` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategory` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userposts`
--

LOCK TABLES `userposts` WRITE;
/*!40000 ALTER TABLE `userposts` DISABLE KEYS */;
/*!40000 ALTER TABLE `userposts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('Bledi','Bledi','bledarsulmata@gmail.com','$2a$10$yj80So/DzWdNjv8G.XzkDOQcl4uH7/qG2f0/zANn7.zUEz2fbe2EG',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-14 11:29:31
