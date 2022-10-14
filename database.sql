DROP TABLE IF EXISTS "todo";

CREATE TABLE "todo" (
    "id" serial primary key,
    "taskname" varchar not null,
    "completionstatus" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todo" ("taskname")
VALUES
('Vacumn the floors'),
('Dust the bookshelves'),
('Clean the bathrooms');

