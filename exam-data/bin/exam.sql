Warning: Using a password on the command line interface can be insecure.
-- MySQL dump 10.13  Distrib 5.6.48, for Linux (x86_64)
--
-- Host: 8.135.66.238    Database: exam
-- ------------------------------------------------------
-- Server version	5.5.5-10.5.8-MariaDB-1:10.5.8+maria~focal

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
-- Table structure for table `t_choice`
--

DROP TABLE IF EXISTS `t_choice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_choice` (
  `id` int(11) NOT NULL,
  `question` varchar(255) DEFAULT NULL COMMENT '题目',
  `create_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='选择题';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_choice`
--

LOCK TABLES `t_choice` WRITE;
/*!40000 ALTER TABLE `t_choice` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_choice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_completion`
--

DROP TABLE IF EXISTS `t_completion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_completion` (
  `id` bigint(20) unsigned NOT NULL,
  `question` varchar(500) DEFAULT NULL COMMENT '题目',
  `create_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='填空题';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_completion`
--

LOCK TABLES `t_completion` WRITE;
/*!40000 ALTER TABLE `t_completion` DISABLE KEYS */;
INSERT INTO `t_completion` VALUES (1390559232,'为了执行网络I/O，一个进程必须做的第一件事情就是调用socket函数，指定期望的{A}。','2021-02-09 22:59:43'),(1472348160,'bind函数把一个{A}赋予一个套接字。','2021-02-09 23:00:22'),(1501708288,'如果让内核来为套接字选择一个临时端口号，函数bind并不返回所选择的值。为了得到内核所选择的这个临时端口值，必须调用函数{A}来返回协议地址。','2021-02-09 23:00:36'),(1520582656,'TCP有一个{A}(maximum segment size, 最大分节大小), 用于向对端TCP通告对端在每个分节中能发送的最大TCP数据量。','2021-02-09 23:00:45'),(1537359872,'TCP含有用于{A}估算客户和服务器之间的{B}时间（round-trip time，RTT）的算法，以便它知道等待一个确认需要多少时间。','2021-02-09 23:00:53'),(1558331392,'TCP套接字是一种{A}套接字(stream socket)。TCP关心确认、超时和重传之类的细节。','2021-02-09 23:01:03'),(1579302912,'大多数套接字函数都需要一个指向套接字地址结构的指针作为参数。每个协议族都定义它自己的套接字地址结构。这些结构的名字均以{A}开头，并以对应每个协议族的{B}后缀结尾。','2021-02-09 23:01:13'),(1600274432,'{A}是TCP传递给IP的数据单元。','2021-02-09 23:01:23'),(166543376384,'listen函数把一个未连接的套接字转换成一个{A}套接字，指示内核应接受指向该套接字的连接请求。','2021-02-10 20:52:14'),(167696809984,'accept函数由TCP服务器调用，用于从{A}队列队头返回下一个已完成连接。如果已完成连接队列为空，那么进程被投入睡眠（假定套接字为默认的阻塞方式）。','2021-02-10 21:01:24'),(170588782592,'{A}（signal）就是告知某个进程发生了某个事件的通知，有时也称为软件中断（softwareinterrupt）。','2021-02-10 21:24:23'),(174789378048,'{A}信号就是由内核在任何一个进程终止时发给它的父进程的一个信号。','2021-02-10 21:57:46'),(640287916032,'\"音\"是由发音体{A}而产生的。','2021-02-13 11:37:13');
/*!40000 ALTER TABLE `t_completion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_completion_audio`
--

DROP TABLE IF EXISTS `t_completion_audio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_completion_audio` (
  `id` bigint(20) unsigned NOT NULL,
  `completion_id` bigint(20) unsigned NOT NULL COMMENT '所属填空题',
  `name` varchar(20) DEFAULT NULL COMMENT '音频名称',
  `src` varchar(255) DEFAULT NULL COMMENT '资源地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='填空题音频表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_completion_audio`
--

LOCK TABLES `t_completion_audio` WRITE;
/*!40000 ALTER TABLE `t_completion_audio` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_completion_audio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_completion_correct`
--

DROP TABLE IF EXISTS `t_completion_correct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_completion_correct` (
  `id` bigint(20) unsigned NOT NULL,
  `completion_id` bigint(20) unsigned NOT NULL COMMENT '所属填空题',
  `code` varchar(20) DEFAULT NULL COMMENT '占位代码',
  `expected` varchar(20) DEFAULT NULL COMMENT '答案',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='填空题正确答案';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_completion_correct`
--

LOCK TABLES `t_completion_correct` WRITE;
/*!40000 ALTER TABLE `t_completion_correct` DISABLE KEYS */;
INSERT INTO `t_completion_correct` VALUES (1390559233,1390559232,'A','通信协议类型'),(1472348161,1472348160,'A','本地协议地址'),(1501708289,1501708288,'A','getsockname'),(1520582657,1520582656,'A','MSS'),(1537359873,1537359872,'A','动态'),(1537359874,1537359872,'B','往返'),(1558331393,1558331392,'A','流'),(1579302913,1579302912,'A','sockaddr_'),(1579302914,1579302912,'B','唯一'),(1600274433,1600274432,'A','分节'),(166543376385,166543376384,'A','被动'),(167696809985,167696809984,'A','已完成连接'),(170588782593,170588782592,'A','信号'),(174789378049,174789378048,'A','SIGCHLD'),(640287916033,640287916032,'A','振动');
/*!40000 ALTER TABLE `t_completion_correct` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_exam`
--

DROP TABLE IF EXISTS `t_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_exam` (
  `id` bigint(20) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL COMMENT '考试标题',
  `create_at` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='考试表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_exam`
--

LOCK TABLES `t_exam` WRITE;
/*!40000 ALTER TABLE `t_exam` DISABLE KEYS */;
INSERT INTO `t_exam` VALUES (520748154880,'UNIX网络编程','2021-02-12 19:47:12'),(545844772864,'乐理','2021-02-12 23:06:39');
/*!40000 ALTER TABLE `t_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_exam_question`
--

DROP TABLE IF EXISTS `t_exam_question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_exam_question` (
  `id` bigint(20) unsigned NOT NULL,
  `exam_id` bigint(20) DEFAULT NULL,
  `question_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='考试题目表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_exam_question`
--

LOCK TABLES `t_exam_question` WRITE;
/*!40000 ALTER TABLE `t_exam_question` DISABLE KEYS */;
INSERT INTO `t_exam_question` VALUES (520748154881,520748154880,1501708288),(521593307136,520748154880,170588782592),(521654124544,520748154880,1600274432),(521677193216,520748154880,166543376384),(521700261888,520748154880,1579302912),(521723330560,520748154880,1472348160),(521742204928,520748154880,1537359872),(521761079296,520748154880,1520582656),(521784147968,520748154880,1390559232),(521803022336,520748154880,167696809984),(521823993856,520748154880,1558331392),(640340344832,545844772864,640287916032);
/*!40000 ALTER TABLE `t_exam_question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-19 10:10:31
