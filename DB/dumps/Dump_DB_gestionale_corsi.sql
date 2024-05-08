CREATE DATABASE  IF NOT EXISTS `react_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `react_app`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: react_app
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS categoria;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE categoria (
  ID_CA int NOT NULL AUTO_INCREMENT,
  Nome_Categoria enum('FrontEnd','BackEnd','FullStack','Cybersecurity') DEFAULT NULL,
  PRIMARY KEY (ID_CA)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES categoria WRITE;
/*!40000 ALTER TABLE categoria DISABLE KEYS */;
INSERT INTO categoria VALUES (1,'FrontEnd'),(2,'BackEnd'),(4,'Cybersecurity');
/*!40000 ALTER TABLE categoria ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `corso`
--

DROP TABLE IF EXISTS corso;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE corso (
  ID_C int NOT NULL AUTO_INCREMENT,
  Nome_Corso varchar(255) DEFAULT NULL,
  Descrizione_breve varchar(255) DEFAULT NULL,
  Descrizione_completa text,
  Durata int DEFAULT NULL,
  FK_CA int DEFAULT NULL,
  PRIMARY KEY (ID_C),
  KEY corso_ibfk_1_idx (FK_CA),
  CONSTRAINT corso_ibfk_1 FOREIGN KEY (FK_CA) REFERENCES categoria (ID_CA)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `corso`
--

LOCK TABLES corso WRITE;
/*!40000 ALTER TABLE corso DISABLE KEYS */;
INSERT INTO corso VALUES (4,'Java','Corso di Java','Corso avanzato di Java base, include i moduli Java Avanzato e Java EE',200,2),(5,'Sviluppo di Applicazioni Mobili','Corso di sviluppo di app mobili','Il corso si concentra sullo sviluppo di applicazioni mobili per piattaforme Android e iOS, con un focus su linguaggi di programmazione come Java, Kotlin, Swift e Objective-C.',180,1),(6,'Progettazione di Interfacce Utente','Corso di progettazione UI/UX','Il corso introduce gli studenti alla progettazione di interfacce utente intuitive e coinvolgenti, con un focus su principi di design, prototipazione e usabilità.',120,1),(7,'Sviluppo Web Avanzato','Corso di sviluppo web avanzato','Il corso offre una formazione avanzata nello sviluppo di applicazioni web moderne, con un focus su framework come React.js, Angular e Vue.js, insieme a concetti avanzati di frontend e backend.',240,1),(8,'Cloud Computing e DevOps','Corso di cloud computing e DevOps','Il corso si concentra sull\'utilizzo delle tecnologie cloud per lo sviluppo, il deployment e la gestione di applicazioni web, insieme a pratiche di DevOps per l\'automazione dei processi di sviluppo e deployment.',150,2),(9,'Data Science e Machine Learning','Corso di data science e machine learning','Il corso introduce gli studenti ai concetti di data science e machine learning, con un focus sull\'analisi dei dati, l\'addestramento di modelli e l\'applicazione di algoritmi di machine learning.',180,2),(10,'Sicurezza delle Applicazioni','Corso di sicurezza delle applicazioni','Il corso si concentra sulla sicurezza delle applicazioni web e mobili, con un focus su tecniche di hacking etico, gestione delle vulnerabilità e best practices per la sicurezza del software.',150,4),(11,'Blockchain e Criptovalute','Corso di blockchain e criptovalute','Il corso introduce gli studenti alla tecnologia blockchain e alle criptovalute, con un focus su concetti come transazioni, contratti intelligenti e applicazioni decentralizzate.',180,4),(12,'Intelligenza Artificiale Applicata','Corso di intelligenza artificiale applicata','Il corso si concentra sull\'applicazione pratica di tecniche di intelligenza artificiale, inclusi algoritmi di machine learning, reti neurali e computer vision, per lo sviluppo di applicazioni intelligenti.',240,2),(13,'Analisi dei Big Data','Corso di analisi dei big data','Il corso offre una panoramica delle tecniche e degli strumenti per l\'analisi dei big data, con un focus su tecnologie come Hadoop, Spark e Apache Kafka, insieme a concetti di data mining e data visualization.',180,2),(14,'Automazione e Testing','Corso di automazione e testing','Il corso si concentra sull\'automazione dei processi di sviluppo e testing delle applicazioni, con un focus su strumenti come Selenium, Jest e JUnit, insieme a pratiche di Continuous Integration e Continuous Deployment.',150,2),(15,'Java1','Corso di Java','Corso avanzato di Java base, include i moduli Java Avanzato e Java EE',200,2),(16,'AAA','AAAA','AAAA',600,2),(17,'Java1','Corso di Java','Corso avanzato di Java base, include i moduli Java Avanzato e Java EE',200,2),(18,'AAA','AAAA','AAAA',0,1);
/*!40000 ALTER TABLE corso ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ruolo`
--

DROP TABLE IF EXISTS ruolo;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE ruolo (
  ID_G int NOT NULL AUTO_INCREMENT,
  TIPOLOGIA enum('Admin','Utente','Docente') DEFAULT NULL,
  PRIMARY KEY (ID_G)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ruolo`
--

LOCK TABLES ruolo WRITE;
/*!40000 ALTER TABLE ruolo DISABLE KEYS */;
INSERT INTO ruolo VALUES (1,'Admin'),(2,'Docente');
/*!40000 ALTER TABLE ruolo ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS utente;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE utente (
  ID_U int NOT NULL AUTO_INCREMENT,
  Nome varchar(255) DEFAULT NULL,
  Cognome varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (ID_U),
  UNIQUE KEY email_UNIQUE (email)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente`
--

LOCK TABLES utente WRITE;
/*!40000 ALTER TABLE utente DISABLE KEYS */;
INSERT INTO utente VALUES (7,'Simone','De Meis','Simone@icloud.com','b83cb68a006bf684628aaae5775e3794fe4d9ee57bb3d5c9173772b5cd4a4a94'),(8,'Lorenzo','Taverna','lorenzotaverna@icloud.com','b83cb68a006bf684628aaae5775e3794fe4d9ee57bb3d5c9173772b5cd4a4a94');
/*!40000 ALTER TABLE utente ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente_ruolo`
--

DROP TABLE IF EXISTS utente_ruolo;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE utente_ruolo (
  FK_R int NOT NULL,
  FK_U int NOT NULL,
  PRIMARY KEY (FK_R,FK_U),
  KEY FK_U (FK_U),
  CONSTRAINT utente_ruolo_ibfk_1 FOREIGN KEY (FK_R) REFERENCES ruolo (ID_G) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT utente_ruolo_ibfk_2 FOREIGN KEY (FK_U) REFERENCES utente (ID_U) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente_ruolo`
--

LOCK TABLES utente_ruolo WRITE;
/*!40000 ALTER TABLE utente_ruolo DISABLE KEYS */;
INSERT INTO utente_ruolo VALUES (1,7),(1,8);
/*!40000 ALTER TABLE utente_ruolo ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utenti_corsi`
--

DROP TABLE IF EXISTS utenti_corsi;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE utenti_corsi (
  FK_UC int NOT NULL,
  FK_CU int NOT NULL,
  PRIMARY KEY (FK_UC,FK_CU),
  KEY utenti_corsi_ibfk_2_idx (FK_CU),
  CONSTRAINT utenti_corsi_ibfk_1 FOREIGN KEY (FK_UC) REFERENCES utente (ID_U) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT utenti_corsi_ibfk_2 FOREIGN KEY (FK_CU) REFERENCES corso (ID_C)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utenti_corsi`
--

LOCK TABLES utenti_corsi WRITE;
/*!40000 ALTER TABLE utenti_corsi DISABLE KEYS */;
INSERT INTO utenti_corsi VALUES (8,4);
/*!40000 ALTER TABLE utenti_corsi ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-08 23:30:42
