SELECT * FROM Easy.favBooks;
DROP DATABASE IF EXISTS Easy;
CREATE DATABASE Easy;
USE Easy;
CREATE TABLE favBooks (title varchar(225), publishDate varchar(225),  authorWholeName varchar(225));
INSERT INTO favBooks (title, publishDate, authorWholeName)
VALUES ("If It Bleeds", "April 21st, 2020", "Stephen King"),
("The Family Upstairs", "August 6th, 2019", "Lisa Jewell"),
("To Shake The Sleeping Self", "October 2nd, 2018", "Jedidiah Jenkins"),
("Little Fires Everywhere", "September 12th, 2017", "Celeste NG"),
("Sacred Woman", "October 16th, 2001", "Queen Afua");


INSERT INTO favBooks (title, publishDate, authorWholeName)
VALUES ("The Shinning", "January 28th, 1977", "Stephen King"),
("Awkward Black Girl", "February 3rd, 2011", "Issa Rae");

DELETE FROM favBooks
WHERE title = "If It Bleeds";

SELECT SUM(title)
FROM favBooks;