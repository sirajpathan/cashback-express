CREATE TABLE `ruleset` (
  `id` int NOT NULL AUTO_INCREMENT,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `cashback` float NOT NULL,
  `redemption_limit` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `start_date_index` (`start_date`,`end_date`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `customer_id` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `date_index` (`date`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
