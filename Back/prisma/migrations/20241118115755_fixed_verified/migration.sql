-- AlterTable
ALTER TABLE `tags` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `tasks` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `verified` BOOLEAN NOT NULL DEFAULT false;
