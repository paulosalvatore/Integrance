-- AlterTable
ALTER TABLE `colaboradores` ADD COLUMN `empresasId` INTEGER;

-- CreateTable
CREATE TABLE `Empresas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `razaoSocial` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Empresas.razaoSocial_unique`(`razaoSocial`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Colaboradores` ADD FOREIGN KEY (`empresasId`) REFERENCES `Empresas`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
