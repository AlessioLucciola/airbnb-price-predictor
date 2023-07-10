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
  `is_children_friendly` int NOT NULL,
  `availability_365` int NOT NULL,
  `has_tv` int NOT NULL,
  `is_bathroom_shared` int NOT NULL,
  `room_type` int NOT NULL,
  `has_bathtub` int NOT NULL,
  `review_scores_rating` double NOT NULL,
  `has_self_checkin` int NOT NULL,
  `has_private_entrance` int NOT NULL,
  `has_security_devices` int NOT NULL,
  `calculated_host_listings_count` int NOT NULL,
  `has_patio` int NOT NULL,
  `is_smoking_allowed` int NOT NULL,
  `city_center_dist` double NOT NULL,
  `has_free_parking` int NOT NULL,
  `host_identity_verified` int NOT NULL,
  `station_dist` double NOT NULL,
  `review_scores_cleanliness` double NOT NULL,
  `host_is_superhost` int NOT NULL,
  `instant_bookable` int NOT NULL,
  `host_response_time` int NOT NULL,
  `has_elevator` int NOT NULL,
  `review_scores_location` double NOT NULL,
  `has_cooking_basics` int NOT NULL,
  `review_scores_value` double NOT NULL,
  `number_of_reviews` int NOT NULL,
  `review_scores_checkin` double NOT NULL,
  `review_scores_communication` double NOT NULL,
  `city` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `price` double NOT NULL,
  `address` varchar(255) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `poi_dist` double NOT NULL,
  `house_number` double NOT NULL,
  `minimum_nights` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2023-07-10 15:35:31
