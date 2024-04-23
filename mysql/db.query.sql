-- Create table query for registration database

CREATE TABLE `test`.`registration` (`id` INT(15) NOT NULL AUTO_INCREMENT , `firstname` VARCHAR(255) NULL , `lastname` VARCHAR(255) NULL , `gender` VARCHAR(255) NULL , `email` VARCHAR(255) NULL , `password` VARCHAR(255) NULL , `number` BIGINT(20) NULL , `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP , `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;
