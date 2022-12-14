USE incloodle;

CREATE TABLE IF NOT EXISTS admin (
	admin_id INT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(64) NOT NULL UNIQUE,
	name VARCHAR(64) NOT NULL,
	passwd VARCHAR(64) NOT NULL,
	rol INT NOT NULL,
	is_active BOOLEAN NOT NULL DEFAULT 0,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS instructive (
	instructive_id INT AUTO_INCREMENT PRIMARY KEY,
	question VARCHAR(128),
	answer MEDIUMTEXT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS teacher (
	teacher_id INT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(64) NOT NULL UNIQUE,
	name VARCHAR(64) NOT NULL,
	rut VARCHAR(64) NOT NULL UNIQUE,
	passwd VARCHAR(64) NOT NULL,
	rol INT NOT NULL,
	is_active BOOLEAN NOT NULL DEFAULT 0,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS student (
	student_id INT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(64) NOT NULL UNIQUE,
	name VARCHAR(64) NOT NULL,
	rut VARCHAR(64) NOT NULL UNIQUE,
	passwd VARCHAR(64) NOT NULL,
	rol INT NOT NULL,
	last_connection DATETIME,
	last_disconnection DATETIME,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS teacherStudent (
	teacherStudent_id INT AUTO_INCREMENT PRIMARY KEY,
	teacher_id INT,
	student_id INT,
	FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id) ON DELETE CASCADE,
	FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS course (
	course_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(64) NOT NULL,
	period VARCHAR(64) NOT NULL,
	career VARCHAR(64) NOT NULL,
	final_score FLOAT(2, 2),
	teacher_id INT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY(teacher_id) REFERENCES teacher(teacher_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS enrollment (
	enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
	final_score DECIMAL(3, 1),
	course_id INT,
	student_id INT,
	FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE CASCADE,
	FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS document (
	document_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(64) NOT NULL,
	type INTEGER NOT NULL DEFAULT 0,
	link TEXT NOT NULL,
	course_id INT NOT NULL,
	FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS exam (
	exam_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(64) NOT NULL,
	link TEXT NOT NULL,
	max_score DECIMAL(3, 1) NOT NULL,
	type INTEGER NOT NULL DEFAULT 1,
	num_of_questions INT NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
	course_id INT NOT NULL,
	FOREIGN KEY (course_id) REFERENCES course(course_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS studentExam (
	studentExam_id INT AUTO_INCREMENT PRIMARY KEY,
	is_pendient BOOLEAN NOT NULL DEFAULT 1,
	score DECIMAL(3, 1),
	init_date DATETIME,
	finish_date DATETIME,
	student_id INT,
	exam_id INT,
	FOREIGN KEY (student_id) REFERENCES student(student_id) ON DELETE CASCADE,
	FOREIGN KEY (exam_id) REFERENCES exam(exam_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS answer (
	answer_id INT AUTO_INCREMENT PRIMARY KEY,
	question_id INT NOT NULL,
	comment TINYTEXT,
	score DECIMAL(3, 1),
	answer_text TINYTEXT NOT NULL,
	is_correct BOOLEAN NOT NULL DEFAULT 0,
	studentExam_id INT NOT NULL,
	FOREIGN KEY (studentExam_id) REFERENCES studentExam(studentExam_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS career (
	career_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(64) UNIQUE NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS period (
	period_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(64) UNIQUE NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
);

-- INSERT INTO
-- 	`admin` (`email`, `name`, `passwd`, `rol`, `is_active`)
-- VALUES
-- 	(
-- 		'admin@gmail.com',
-- 		'administrator',
-- 		'password',
-- 		0,
-- 		1
-- 	);
-- INSERT INTO
-- 	`teacher` (
-- 		`name`,
-- 		`email`,
-- 		`passwd`,
-- 		`rut`,
-- 		`rol`,
-- 		`is_active`
-- 	)
-- VALUES
-- 	(
-- 		'Tebaida Point',
-- 		'teacher@gmail.com',
-- 		'password',
-- 		'3S76F98HBT86',
-- 		1,
-- 		1
-- 	);
-- INSERT INTO
-- 	`student` (`name`, `email`, `passwd`, `rut`, `rol`)
-- VALUES
-- 	(
-- 		'Linux Torvalds',
-- 		'student@gmail.com',
-- 		'password',
-- 		'9K92Y36IUV56',
-- 		2
-- 	);
-- INSERT INTO
-- 	`course` (`name`, `period`, `teacher_id`)
-- VALUES
-- 	('Penetration Testing', '2023-1', 1);