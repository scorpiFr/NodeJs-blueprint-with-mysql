# NodeJs-blueprint-with-mysql

git pull https://github.com/scorpiFr/NodeJs-blueprint-with-mysql.git yourdirectory
cd yourdirectory <br/>
<br/>
npm install <br/>
npm start <br/>
<br/>
http://localhost:4000/test <br/>
<br/>
complete your .env : <br/>
DB_HOST=localhost <br/>
DB_USER=root <br/>
DB_PASS=your_password <br/>
DB_NAME=your_db <br/>
PORT=4000 <br/>
<br/>
complete your db : <br/>
create your_db <br/>
use your_db <br/>
<br/>
CREATE TABLE `test` ( <br/>
`id` int NOT NULL AUTO_INCREMENT, <br/>
`nom` varchar(100) NOT NULL, <br/>
`age` int DEFAULT NULL, <br/>
`email` varchar(150) DEFAULT NULL, <br/>
PRIMARY KEY (`id`), <br/>
UNIQUE KEY `email` (`email`) <br/>
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci; <br/>
<br/>
INSERT INTO `test` VALUES (1,'Alice Martin',28,'alice.martin@example.com'); <br/>
INSERT INTO `test` VALUES (2,'Bob Dupont',35,'bob.dupont@example.com'); <br/>
INSERT INTO `test` VALUES (3,'Claire Durand',22,'claire.durand@example.com'); <br/>
INSERT INTO `test` VALUES (4,'David Noël',41,'david.noel@example.com'); <br/>
INSERT INTO `test` VALUES (5,'Émilie Lefevre',30,'emilie.lefevre@example.com'); <br/>
<br/>
