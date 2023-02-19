
CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY, 
    "path" VARCHAR (300) NOT NULL, 
    "description" VARCHAR (300),
    "likes" INTEGER
)

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/ziggy.png', 'My dog Ziggy sitting in a chair (one of his favorite things) wearing a pink birthday hat.', 0), ('images/Katniss.jpeg', 'Katniss, my first born, being very cute', 0), ('images/Broadway.jpeg', 'My friend Mihret and I at our first Broadway show this summer', 0), ('images/camping.jpeg', 'My partner Aimee and I and our dog Ziggy camping on the North Shore of Lake Superior', 0), ('images/Cinnamon.jpeg', 'My cat Cinnamon', 0), ('images/Family.jpeg', 'My mom, my brother Ryan, and I eating breakfast during their visit to Minneapolis last summer', 0), ('images/garden.jpeg', 'A view of my plot at Sabathani Community Garden (RIP) summer 2020', 0), ('images/hammock.jpeg', 'Ziggy in the hammock', 0), ('images/Stormy.jpeg', 'My favorite cat in the whole world, Stormy. I adopted her at age 10 and she lived nearly 20 years', 0), ('images/tomatoes.jpeg', 'A tomato harvest from my garden last summer', 0);