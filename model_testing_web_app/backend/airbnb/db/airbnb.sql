-- Adminer 4.8.1 MySQL 8.0.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `airbnb`;
CREATE TABLE `airbnb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `accommodates` int NOT NULL,
  `bedrooms` int NOT NULL,
  `n_bathrooms` int NOT NULL,
  `is_children_friendly` binary(1) NOT NULL,
  `availability_365` int NOT NULL,
  `has_tv` binary(1) NOT NULL,
  `is_bathroom_shared` binary(1) NOT NULL,
  `room_type` int NOT NULL,
  `has_bathtub` binary(1) NOT NULL,
  `review_scores_rating` double NOT NULL,
  `has_self_checkin` binary(1) NOT NULL,
  `has_private_entrance` binary(1) NOT NULL,
  `has_security_devices` binary(1) NOT NULL,
  `calculated_host_listings_count` int NOT NULL,
  `has_patio` binary(1) NOT NULL,
  `is_smoking_allowed` binary(1) NOT NULL,
  `city_center_dist` double NOT NULL,
  `has_free_parking` binary(1) NOT NULL,
  `host_identity_verified` binary(1) NOT NULL,
  `station_dist` double NOT NULL,
  `review_scores_cleanliness` double NOT NULL,
  `host_is_superhost` binary(1) NOT NULL,
  `instant_bookable` binary(1) NOT NULL,
  `host_response_time` int NOT NULL,
  `has_elevator` binary(1) NOT NULL,
  `review_scores_location` double NOT NULL,
  `has_cooking_basics` binary(1) NOT NULL,
  `review_scores_value` double NOT NULL,
  `number_of_reviews` int NOT NULL,
  `review_scores_checkin` double NOT NULL,
  `review_scores_communication` double NOT NULL,
  `city` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `price` float NOT NULL,
  `address` varchar(255) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `airbnb` (`id`, `accommodates`, `bedrooms`, `n_bathrooms`, `is_children_friendly`, `availability_365`, `has_tv`, `is_bathroom_shared`, `room_type`, `has_bathtub`, `review_scores_rating`, `has_self_checkin`, `has_private_entrance`, `has_security_devices`, `calculated_host_listings_count`, `has_patio`, `is_smoking_allowed`, `city_center_dist`, `has_free_parking`, `host_identity_verified`, `station_dist`, `review_scores_cleanliness`, `host_is_superhost`, `instant_bookable`, `host_response_time`, `has_elevator`, `review_scores_location`, `has_cooking_basics`, `review_scores_value`, `number_of_reviews`, `review_scores_checkin`, `review_scores_communication`, `city`, `name`, `price`, `address`) VALUES
(1,	6,	3,	2,	UNHEX('31'),	365,	UNHEX('31'),	UNHEX('30'),	0,	UNHEX('31'),	4.5,	UNHEX('30'),	UNHEX('31'),	UNHEX('31'),	3,	UNHEX('30'),	UNHEX('30'),	0.7692050448688229,	UNHEX('30'),	UNHEX('31'),	0.018166210157067413,	4.8,	UNHEX('31'),	UNHEX('31'),	1,	UNHEX('30'),	4.5,	UNHEX('31'),	4.5,	15,	5,	4.5,	14,	'Test',	0,	'');

-- 2023-05-30 12:43:43
