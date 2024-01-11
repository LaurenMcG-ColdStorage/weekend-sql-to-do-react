CREATE TABLE "todo"(
	"id" SERIAL PRIMARY KEY,
	"note" VARCHAR(250) NOT NULL,
	"priority" VARCHAR(20)
	);

INSERT INTO "todo" ("note", "priority")
VALUES ('Build this app', 'Urgent'),
	   ('Solve the fermi paradox', 'Eventually'),
	   ('Finish planning a wedding', 'Pretty Important')
	