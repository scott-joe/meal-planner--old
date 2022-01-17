-- -------------------------------------------------------------
-- TablePlus 4.5.2(402)
--
-- https://tableplus.com/
--
-- Database: meal-planner
-- Generation Time: 2022-01-17 16:31:16.4580
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."courses";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table Definition
CREATE TABLE "public"."courses" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" varchar NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."meals";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."meals" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" varchar NOT NULL,
    "user" uuid NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."meals:recipes";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."meals:recipes" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "meal" uuid NOT NULL,
    "recipe" uuid NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."plans";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."plans" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" varchar,
    "user" uuid,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."plans:meals";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."plans:meals" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "plan" uuid,
    "meal" uuid,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."proteins";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."proteins" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" varchar NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."recipes";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

DROP TYPE IF EXISTS "public"."course";
CREATE TYPE "public"."course" AS ENUM ('appetizer', 'main', 'side', 'dessert');
DROP TYPE IF EXISTS "public"."protein";
CREATE TYPE "public"."protein" AS ENUM ('chicken', 'pork', 'beef', 'fish', 'seafood', 'lamb', 'egg');

-- Table Definition
CREATE TABLE "public"."recipes" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "name" varchar NOT NULL,
    "user" uuid NOT NULL,
    "course" "public"."course",
    "protein" "public"."protein",
    "style" style,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."users";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."users" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "first_name" varchar,
    "last_name" varchar,
    "email" varchar,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."courses" ("id", "name") VALUES
('018fba88-e3b8-4ce8-8cb5-7052dd57636e', 'side'),
('6a31cb97-f190-4cd3-9184-b55c2abce3f1', 'appetizer'),
('a0a205e9-6b4b-4bc5-8579-55813cc70f4f', 'main'),
('f9b459d1-fb63-41e5-bc0d-3ef6d6887b46', 'dessert');

INSERT INTO "public"."proteins" ("id", "name") VALUES
('3163d6e8-0e5e-4064-96a2-bf66050b07b1', 'lamb'),
('58927e3d-c0d6-4e1c-b3b6-bb6a73a92016', 'chicken'),
('73d64456-f92a-435b-8433-3b1110c8cf81', 'fish'),
('7f03d942-dae0-4a22-b101-6a9f23b831b5', 'egg'),
('8d986e4f-a7af-47ff-8106-0b935cc000b2', 'seafood'),
('c35139f4-6db9-44cd-8756-8b749e047ea1', 'pork'),
('edaf9dda-1235-472d-9fb8-da1ff4dd6ae6', 'beef');

INSERT INTO "public"."users" ("id", "first_name", "last_name", "email") VALUES
('53ddece3-6621-46d2-abd1-97e7fca5bd2d', 'Emily', 'Williams', 'emtrimble@gmail.com'),
('8065d2db-19ee-498e-baad-3e870065d602', 'Scott', 'Williams', 'scott.joe.williams@gmail.com');

ALTER TABLE "public"."meals" ADD FOREIGN KEY ("user") REFERENCES "public"."users"("id");
ALTER TABLE "public"."meals:recipes" ADD FOREIGN KEY ("meal") REFERENCES "public"."meals"("id");
ALTER TABLE "public"."meals:recipes" ADD FOREIGN KEY ("recipe") REFERENCES "public"."recipes"("id");
ALTER TABLE "public"."plans" ADD FOREIGN KEY ("user") REFERENCES "public"."users"("id");
ALTER TABLE "public"."plans:meals" ADD FOREIGN KEY ("meal") REFERENCES "public"."meals"("id");
ALTER TABLE "public"."plans:meals" ADD FOREIGN KEY ("plan") REFERENCES "public"."plans"("id");
ALTER TABLE "public"."recipes" ADD FOREIGN KEY ("user") REFERENCES "public"."users"("id");
