BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Companies" (
	"name"	TEXT NOT NULL,
	"stockSymbol"	TEXT NOT NULL,
	"incorporated"	TEXT,
	CONSTRAINT "PK_Companies" PRIMARY KEY("stockSymbol")
);
CREATE TABLE IF NOT EXISTS "Employees" (
	"id"	INTEGER NOT NULL,
	"firstName"	TEXT,
	"lastName"	TEXT,
	"title"	TEXT,
	"CompanyStockSymbol"	TEXT NOT NULL,
	CONSTRAINT "FK_Employees_Company" FOREIGN KEY("CompanyStockSymbol") REFERENCES "Companies"("stockSymbol"),
	CONSTRAINT "PK_Employee" PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "Companies" ("name","stockSymbol","incorporated") VALUES ('Spacely''s Space Sprockets','spcly','2054-10-04 12:00:00.000'),
 ('Cogswell''s Cosmic COGs','cgswl','2050-10-04 23:00:00.000');
INSERT INTO "Employees" ("id","firstName","lastName","title","CompanyStockSymbol") VALUES (1,'Spencer','Cogswell','CEO','cgswl'),
 (2,'Cosmo','Spacely','CEO','spcly'),
 (3,'George','Jetson','Digital Index Operator','spcly'),
 (4,'R.U.D.I.','','Computer','spcly'),
 (5,'Judy','Jetson','Intern','spcly');
COMMIT;
