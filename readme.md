# sql 구성

```sql
CREATE TABLE `board` (
  `boardindex` int(11) PRIMARY KEY AUTO_INCREMENT,
  `userid` varchar(64) NOT NULL,
  `subject` varchar(64) NOT NULL ,
  `content` text NOT NULL,
  `tagContent` varchar(64) UNIQUE,
  `registerDate` datetime DEFAULT (now())
);

CREATE TABLE `comment` (
  `commentindex` int(11) PRIMARY KEY AUTO_INCREMENT,
  `boardindex` int(11) NOT NULL,
  `userid` varchar(64) NOT NULL,
  `content` text NOT NULL,
  `registerDate` datetime DEFAULT (now())
);

CREATE TABLE `user` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `userid` varchar(64) UNIQUE,
  `userpw` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `gender` varchar(64) NOT NULL
);

CREATE TABLE `like` (
  `likeid` int(11) PRIMARY KEY AUTO_INCREMENT,
  `boardindex` int(30) NOT NULL,
  `userid` varchar(64) NOT NULL
);

CREATE TABLE `onlytag` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `content` varchar(64) UNIQUE
);

CREATE TABLE `hashtag` (
  `boardindex` int(11) NOT NULL,
  `content` varchar(64) NOT NULL
);

ALTER TABLE `board` ADD FOREIGN KEY (`userid`) REFERENCES `user` (`userid`);


ALTER TABLE `comment` ADD FOREIGN KEY (`userid`) REFERENCES `user` (`userid`);

ALTER TABLE `like` ADD FOREIGN KEY (`userid`) REFERENCES `user` (`userid`);

ALTER TABLE `comment` ADD FOREIGN KEY (`boardindex`) REFERENCES `board` (`boardindex`) ON DELETE CASCADE;

ALTER TABLE `like` ADD FOREIGN KEY (`boardindex`) REFERENCES `board` (`boardindex`) ON DELETE CASCADE;

ALTER TABLE `onlytag` ADD FOREIGN KEY (`id`) REFERENCES `board` (`boardindex`) ON DELETE CASCADE;

ALTER TABLE `hashtag` ADD FOREIGN KEY (`content`) REFERENCES `board` (`tagContent`) ON DELETE CASCADE;
```
