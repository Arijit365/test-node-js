-- Create table query for registration database

CREATE TABLE `test`.`registration` (`id` INT(15) NOT NULL AUTO_INCREMENT , `firstname` VARCHAR(255) NULL , `lastname` VARCHAR(255) NULL , `gender` VARCHAR(255) NULL , `email` VARCHAR(255) NULL , `password` VARCHAR(255) NULL , `number` BIGINT(20) NULL , `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP , `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;

--- Query for add new column country code , by default we stored 91

ALTER TABLE `registration` ADD `country_code` INT(6) NULL DEFAULT '91' AFTER `number`;

-- Query for add new column original_password 

ALTER TABLE `registration` ADD `original_password` VARCHAR(255) NULL AFTER `email`;

-- Create a new table to add the merchant's authentication details

CREATE TABLE `test`.`master` (`id` INT NOT NULL AUTO_INCREMENT , `client_id` VARCHAR(255) NULL DEFAULT NULL , `client_secret_key` VARCHAR(255) NULL DEFAULT NULL , `token` TEXT NULL DEFAULT NULL , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;
