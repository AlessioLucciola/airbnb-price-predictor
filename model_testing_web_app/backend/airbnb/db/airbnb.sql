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
  `beds` int NOT NULL,
  `bedrooms` int NOT NULL,
  `n_bathrooms` int NOT NULL,
  `is_children_friendly` binary(1) NOT NULL,
  `availability_365` int NOT NULL,
  `has_tv` binary(1) NOT NULL,
  `is_bathroom_shared` binary(1) NOT NULL,
  `property_type` int NOT NULL,
  `room_type` int NOT NULL,
  `has_bathtub` binary(1) NOT NULL,
  `review_scores_location` double NOT NULL,
  `has_self_checkin` binary(1) NOT NULL,
  `has_private_entrance` binary(1) NOT NULL,
  `has_security_devices` binary(1) NOT NULL,
  `calculated_host_listings_count` int NOT NULL,
  `has_laundry` binary(1) NOT NULL,
  `has_patio` binary(1) NOT NULL,
  `has_paid_parking` binary(1) NOT NULL,
  `has_fireplace` binary(1) NOT NULL,
  `is_work_email_verified` binary(1) NOT NULL,
  `is_long_term_stays_allowed` binary(1) NOT NULL,
  `has_city_skyline_view` binary(1) NOT NULL,
  `is_smoking_allowed` binary(1) NOT NULL,
  `city_center_dist` double NOT NULL,
  `has_free_parking` binary(1) NOT NULL,
  `host_identity_verified` binary(1) NOT NULL,
  `station_dist` double NOT NULL,
  `has_heating_cooling_systems` binary(1) NOT NULL,
  `review_scores_cleanliness` double NOT NULL,
  `host_is_superhost` binary(1) NOT NULL,
  `instant_bookable` binary(1) NOT NULL,
  `host_response_time` int NOT NULL,
  `has_elevator` binary(1) NOT NULL,
  `review_scores_rating` double NOT NULL,
  `is_pet_friendly` binary(1) NOT NULL,
  `has_cooking_basics` binary(1) NOT NULL,
  `has_internet` binary(1) NOT NULL,
  `has_breakfast` binary(1) NOT NULL,
  `review_scores_value` double NOT NULL,
  `host_greets_you` binary(1) NOT NULL,
  `number_of_reviews` int NOT NULL,
  `is_phone_verified` binary(1) NOT NULL,
  `review_scores_checkin` double NOT NULL,
  `review_scores_communication` double NOT NULL,
  `is_email_verified` binary(1) NOT NULL,
  `city` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2023-05-25 17:05:29
