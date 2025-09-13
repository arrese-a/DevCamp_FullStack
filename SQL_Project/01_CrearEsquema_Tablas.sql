-- Crear esquema
-- Crear tablas
-- ---------------------------------------------------------------------------------------------------
-- Crear Esquema UniversityProject
CREATE SCHEMA `UniversityProject`;
USE `UniversityProject`;

-- ---------------------------------------------------------------------------------------------------
--
-- Tabla professors
--
CREATE TABLE `professors` (
  `professor_id` int NOT NULL AUTO_INCREMENT,
  `professor_name` varchar(100) NOT NULL,
  `professor_surname` varchar(45) DEFAULT NULL,
  `professor_email` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`professor_id`),
  UNIQUE KEY `professor_id_UNIQUE` (`professor_id`),
  UNIQUE KEY `professor_email_UNIQUE` (`professor_email`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------------------------------------
--
-- Tabla students
--
CREATE TABLE `students` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `student_name` varchar(45) NOT NULL,
  `student_surname` varchar(45) DEFAULT NULL,
  `student_email` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `student_id_UNIQUE` (`student_id`),
  UNIQUE KEY `student_email_UNIQUE` (`student_email`)
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------------------------------------
--
-- Tabla courses
--
CREATE TABLE `courses` (
  `course_id` int NOT NULL AUTO_INCREMENT,
  `course_name` varchar(45) NOT NULL,
  `professor_id` int NOT NULL,
  PRIMARY KEY (`course_id`),
  KEY `course_professor_idx` (`professor_id`),
  CONSTRAINT `course_professor` FOREIGN KEY (`professor_id`) REFERENCES `professors` (`professor_id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ---------------------------------------------------------------------------------------------------
--
-- Tabla grades
--
CREATE TABLE `grades` (
  `grade_id` int NOT NULL AUTO_INCREMENT,
  `grade` float DEFAULT NULL,
  `student_id` int DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  PRIMARY KEY (`grade_id`),
  KEY `grade_student_idx` (`student_id`),
  KEY `grade_course_idx` (`course_id`),
  CONSTRAINT `grade_course` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`),
  CONSTRAINT `grade_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE
) ENGINE=InnoDB;