DROP TABLE IF EXISTS "todo";

CREATE TABLE "todo" (
    "id" serial primary key,
    "task_name" varchar not null,
    "completion_status" BOOLEAN DEFAULT FALSE
);

INSERT INTO "todo" ("task_name")
VALUES
('Vacumn the floors'),
('Dust the bookshelves'),
('Clean the bathrooms');