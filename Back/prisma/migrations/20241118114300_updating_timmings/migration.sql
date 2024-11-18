-- AlterTable
ALTER TABLE `tags` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `tasks` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `user` MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
