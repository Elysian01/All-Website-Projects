-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: employee
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `dept_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `capacity` int NOT NULL,
  `current_capacity` int DEFAULT NULL,
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (1,'cse',2,2),(2,'it',3,0),(3,'extc',2,1);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department_seq`
--

DROP TABLE IF EXISTS `department_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_seq`
--

LOCK TABLES `department_seq` WRITE;
/*!40000 ALTER TABLE `department_seq` DISABLE KEYS */;
INSERT INTO `department_seq` VALUES (1);
/*!40000 ALTER TABLE `department_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `id` bigint NOT NULL,
  `eid` int DEFAULT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `photo` int DEFAULT NULL,
  `dno` int DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `isadmin` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `dno` (`dno`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`dno`) REFERENCES `department` (`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,101,'Abhishek','Gupta','admin@gmail.com','Admin',NULL,2,'toor',1),(404,1,'Ratan','Tata','ratan@gmail.com','Ex-Chairmen',155,1,'toor',0),(405,2,'Mukesh','Ambani','ambani@gmail.com','Reliance Chairmen',158,3,'toor',0);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee_seq`
--

DROP TABLE IF EXISTS `employee_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee_seq`
--

LOCK TABLES `employee_seq` WRITE;
/*!40000 ALTER TABLE `employee_seq` DISABLE KEYS */;
INSERT INTO `employee_seq` VALUES (501);
/*!40000 ALTER TABLE `employee_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image_path` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=160 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
INSERT INTO `image` VALUES (53,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\mukesh-ambani.jpg','mukesh-ambani.jpg','image/jpeg'),(54,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\elon-musk.jpg','elon-musk.jpg','image/jpeg'),(102,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\satya-nadella.jpg','satya-nadella.jpg','image/jpeg'),(103,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\elon-musk.jpg','elon-musk.jpg','image/jpeg'),(104,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\ratan-tata.jpeg','ratan-tata.jpeg','image/jpeg'),(105,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\mukesh-ambani.jpg','mukesh-ambani.jpg','image/jpeg'),(106,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\sundar-pichai.jpg','sundar-pichai.jpg','image/jpeg'),(107,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\ratan-tata.jpeg','ratan-tata.jpeg','image/jpeg'),(108,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\mukesh-ambani.jpg','mukesh-ambani.jpg','image/jpeg'),(109,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\ratan-tata.jpeg','ratan-tata.jpeg','image/jpeg'),(152,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\ratan-tata.jpeg','ratan-tata.jpeg','image/jpeg'),(153,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\ratan-tata.jpeg','ratan-tata.jpeg','image/jpeg'),(154,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\ratan-tata.jpeg','ratan-tata.jpeg','image/jpeg'),(155,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\ratan-tata.jpeg','ratan-tata.jpeg','image/jpeg'),(156,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\mukesh-ambani.jpg','mukesh-ambani.jpg','image/jpeg'),(157,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\elon-musk.jpg','elon-musk.jpg','image/jpeg'),(158,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\mukesh-ambani.jpg','mukesh-ambani.jpg','image/jpeg'),(159,'D:\\Mtech\\MTech-Projects\\Web-Development-Exercises\\Employee-CRUD\\server\\src\\main\\resources\\imgs\\satya-nadella.jpg','satya-nadella.jpg','image/jpeg');
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_seq`
--

DROP TABLE IF EXISTS `image_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_seq`
--

LOCK TABLES `image_seq` WRITE;
/*!40000 ALTER TABLE `image_seq` DISABLE KEYS */;
INSERT INTO `image_seq` VALUES (251);
/*!40000 ALTER TABLE `image_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-30  1:22:57
