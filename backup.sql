-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: sequelize_thankly_db
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Prompts`
--

DROP TABLE IF EXISTS `Prompts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Prompts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Prompts`
--

LOCK TABLES `Prompts` WRITE;
/*!40000 ALTER TABLE `Prompts` DISABLE KEYS */;
INSERT INTO `Prompts` VALUES (1,'Describe your happiest childhood memory?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(2,'What is a popular song that you enjoy (and why do you like it)?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(3,'What is one of your favorite songs from your childhood?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(4,'Who is the one friend you can always rely on?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(5,'What is the biggest accomplishment in your personal life?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(6,'What is the biggest accomplishment in your professional life?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(7,'What is your favorite memory of your father (or stepfather)?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(8,'What is your favorite memory of your mother (or stepmother?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(9,'Describe your favorite pet (or former pet)?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(10,'List 10 hobbies and activities that bring you joy?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(11,'What promptsis a mistake that I’ve made, which ultimately led to a positive experience?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(12,'Describe a family tradition that you are most grateful for.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(13,'Who is a teacher or mentor that has made an impact on your life and how did they help you?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(14,'What do you like the most about your town or city?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(15,'Describe your favorite location in your house and why you like it.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(16,'What is one something you’ve learned this week that you\'re thankful for?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(17,'Who made you smile in the past 24 hours and why?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(18,'What is a recent purchase that has added value to your life?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(19,'What is the biggest lesson you learned in childhood?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(20,'List 10 ways you can share your gratitude with other people in the next 24 hours.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(21,'Describe your favorite smell.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(22,'Describe your favorite sound.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(23,'Describe your favorite sight.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(24,'Describe your favorite taste.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(25,'Describe your favorite sensation.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(26,'How can you pamper yourself in the next 24 hours?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(27,'Name and write about someone you’ve never met, but who has helped your life in some way.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(28,'How is your life more positive today than it was a year ago?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(29,'What do other people like about you?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(30,'List 10 skills you have that most people don’t possess.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(31,'Describe the last time someone helped you solve a problem at work.','2020-05-12 18:55:12','2020-05-12 18:55:12'),(32,'What is your favorite part of your daily routine?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(33,'What is a great book you’ve recently read?','2020-05-12 18:55:12','2020-05-12 18:55:12'),(34,'What is your favorite holiday and why do you love it?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(35,'What is your favorite T.V. show and why do you love it?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(36,'What is your favorite movie and why do you love it?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(37,'What is your favorite way to enjoy nature? (i.e. walking in the woods, sitting on the beach, or hiking in the mountains, etc.)','2020-05-12 18:55:13','2020-05-12 18:55:13'),(38,'Write about a recent obstacle you faced and how you overcame it.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(39,'Describe a favorite pet and what you love(d) about it.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(40,'List 10 things you are looking forward to in the next year.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(41,'What do you love most about your country?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(42,'What is your favorite food you love to indulge in?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(43,'Write about someone who makes your life better.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(44,'If you’re single, what is your favorite part about being single? Or if you’re married, what is your favorite part about being married?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(45,'What is today’s weather and what is one positive thing you can say about it?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(46,'Describe a weird family tradition that you love?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(47,'When was the last time you had a genuine belly laugh and why was it so funny?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(48,'What body part or organ are you most grateful for today? (e.g., your eyes because you got to see a new movie)','2020-05-12 18:55:13','2020-05-12 18:55:13'),(49,'What is a major lesson that you learned from your job?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(50,'List 10 items that you take for granted, which might not be available to people in other parts of the world (i.e. Clean water, electricity, etc.)','2020-05-12 18:55:13','2020-05-12 18:55:13'),(51,'Write about a recent time when a stranger did something nice for you.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(52,'What is the hardest thing you’ve had to do, which led to a major personal accomplishment?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(53,'What is one aspect of your health that you’re more grateful for?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(54,'Who can you count on whenever you need someone to talk to and why?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(55,'Describe the last time you procrastinated on a task that wasn’t as difficult as you thought it would be.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(56,'What is your favorite habit and why it is an important part of your daily routine?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(57,'Describe a “perfect day” that you recently had.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(58,'What is a favorite country that you’ve visited?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(59,'Describe a funny YouTube video that you recently watched.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(60,'List 10 qualities do you like about yourself.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(61,'What is one thing you look forward to enjoying each day after work?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(62,'What was something you did for the first time recently?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(63,'What is one lesson you learn from rude people?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(64,'When was the last time you had a great nap where you awoke feeling fully refreshed?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(65,'Shower or bath? Which do you prefer and why?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(66,'Write about a time where you felt courageous.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(67,'What are a few ways you can appreciate your health whenever you’re sick?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(68,'What is a favorite drink that you like to enjoy each day?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(69,'Who has forgiven you for a mistake you’ve made in the past?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(70,'List 10 things you have now that you didn’t have 5 years ago.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(71,'What aspects of your job do you enjoy the most?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(72,'What is something positive you can learn from one of your negative qualities? (i.e. Being anxious means you’re really good at planning things out.)','2020-05-12 18:55:13','2020-05-12 18:55:13'),(73,'What are a few aspects of modern technology that you love?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(74,'What is a great recipe you’ve prepared that others rave about?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(75,'Describe a recent time when you truly felt at peace.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(76,'What is your favorite quote or a bit of wisdom that you like to frequently share with others?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(77,'What is your favorite sports team?  Describe a cherished memory you have when cheering for this team.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(78,'Are you a morning person or a night owl?  What do you love most about this part of the day?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(79,'What is the last thank you note you’ve received and why?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(80,'List 10 of your favorite possessions.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(81,'What is a small win that you accomplished in the past 24 hours?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(82,'Describe one thing that you like about your daily commute to work?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(83,'What is a personal viewpoint that positively defines you as a person?  ','2020-05-12 18:55:13','2020-05-12 18:55:13'),(84,'Describe an experience that was painful, but made you a stronger person.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(85,'What is your favorite season and what do you like about it?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(86,'What makes you beautiful?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(87,'What are you most looking forward to this week?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(88,'Describe a small, everyday thing that you enjoy with a special person in your life.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(89,'What is an app or piece of technology that you use every day which adds value to your life?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(90,'List 10 things you like about your job or workplace.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(91,'Describe a favorite outfit and why you feel great when wearing it.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(92,'What activity do you enjoy most when alone?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(93,'What activity do you enjoy when with others?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(94,'Describe your oldest friend. What do you like most about this person?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(95,'How have you recently cared for your physical wellbeing?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(96,'How have you recently cared for your mental wellbeing?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(97,'When you were a child, what did you want to be when you grew up?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(98,'What is your favorite charity and why do you support it?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(99,'Write about a challenging person in your life (i.e. someone you frequently disagree with) and the qualities you like about this person.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(100,'List 10 things you like the most about your country?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(101,'What book are you most grateful for having read?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(102,'What hobbies (or activities) would you miss if you could no longer do them?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(103,'What is something you love(d) about your father (or step-father)?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(104,'What is something you love(d) about your mother (or step-mother)?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(105,'Where was your last vacation? Describe what you did there.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(106,'What is something that comes easily to you, but is challenging for others?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(107,'What is something that you’ve recently fixed?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(108,'Describe something positive in your life that you didn’t have five years ago.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(109,'What makes you happy when you’re feeling down.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(110,'List 10 major life accomplishments that you’re proud to have achieved.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(111,'What artist, musician or author are you most grateful for?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(112,'What do you love most about the current season?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(113,'What gift did you enjoy receiving in the past year?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(114,'What freedoms are you most grateful for?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(115,'Look around the room and list all the items that you’re grateful for.','2020-05-12 18:55:13','2020-05-12 18:55:13'),(116,'What fear are you currently facing?  How can you use this fear to your advantage?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(117,'What is your top goal?  Why is this goal important to you?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(118,'What is your favorite emotion to feel?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(119,'What makes you happy to be alive?','2020-05-12 18:55:13','2020-05-12 18:55:13'),(120,'List 10 things that you hope will happen in the next year.','2020-05-12 18:55:13','2020-05-12 18:55:13');
/*!40000 ALTER TABLE `Prompts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Thanks`
--

DROP TABLE IF EXISTS `Thanks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Thanks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prompt` varchar(255) DEFAULT NULL,
  `body` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Thanks`
--

LOCK TABLES `Thanks` WRITE;
/*!40000 ALTER TABLE `Thanks` DISABLE KEYS */;
/*!40000 ALTER TABLE `Thanks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-13 18:27:41
