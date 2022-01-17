-- -------------------------------------------------------------
-- TablePlus 4.5.2(402)
--
-- https://tableplus.com/
--
-- Database: meal-planner
-- Generation Time: 2022-01-17 16:04:55.4110
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."meals";
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."meals" (
    "id" uuid NOT NULL DEFAULT uuid_generate_v4 (),
    "name" varchar NOT NULL,
    "user" varchar NOT NULL,
    PRIMARY KEY ("id")
);

