CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "classes" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "classes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	"type" TEXT NOT NULL UNIQUE,
	"link" TEXT NOT NULL UNIQUE,
	"teacher_id" integer NOT NULL,
	"class_id" integer NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teachers_classes" (
	"id" serial NOT NULL,
	"teacher_id" integer NOT NULL,
	"class_id" integer NOT NULL,
	CONSTRAINT "teachers_classes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("class_id") REFERENCES "classes"("id");

ALTER TABLE "teachers_classes" ADD CONSTRAINT "teachers_classes_fk0" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id");
ALTER TABLE "teachers_classes" ADD CONSTRAINT "teachers_classes_fk1" FOREIGN KEY ("class_id") REFERENCES "classes"("id");





