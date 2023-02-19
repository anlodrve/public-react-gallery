
CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY, 
    "path" VARCHAR (300) NOT NULL, 
    "description" VARCHAR (300),
    "likes" INTEGER
)

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/ziggy.png', 'My dog Ziggy sitting in a chair (one of his favorite things) wearing a pink birthday hat.', 0) ('images/Katniss.jpeg', 'Katniss, my first born, being very cute', 0)