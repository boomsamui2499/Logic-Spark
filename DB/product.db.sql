BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "category" (
	"category_id"	INTEGER,
	"category_name"	TEXT NOT NULL,
	PRIMARY KEY("category_id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "product" (
	"product_id"	INTEGER NOT NULL,
	"product_name"	TEXT,
	"category_id"	INTEGER,
	"description"	TEXT,
	"price"	INTEGER,
	FOREIGN KEY("category_id") REFERENCES "category"("category_id"),
	PRIMARY KEY("product_id" AUTOINCREMENT)
);
INSERT INTO "category" VALUES (1,'เสื้อ');
INSERT INTO "category" VALUES (2,'กางเกง');
INSERT INTO "category" VALUES (3,'รองเท้า');
INSERT INTO "category" VALUES (4,'เสื้อคลุม');
INSERT INTO "product" VALUES (1,'เสื้อLuffy gear 4',1,'ปี 2020',2500);
INSERT INTO "product" VALUES (2,'กางเกงขาสั้น Zoro',2,'ปี 2020',1590);
INSERT INTO "product" VALUES (3,'เสื้อ Nami',1,'ปี 2020',990);
INSERT INTO "product" VALUES (4,'รองเท้า Ace',3,'ปี 2020',3290);
INSERT INTO "product" VALUES (5,'กางเกงขายาว one piece',2,'ปี 2020',1790);
INSERT INTO "product" VALUES (8,' jacket usop',4,'limited',2490);
CREATE VIEW "test" AS SELECT * FROM "main"."category" WHERE "category_name" LIKE '%เสื้อ%' ESCAPE '\';
COMMIT;
