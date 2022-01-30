/*
  Warnings:

  - The primary key for the `hosts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `hosts` table. All the data in the column will be lost.
  - Added the required column `patrimony` to the `hosts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hosts" DROP CONSTRAINT "hosts_pkey",
DROP COLUMN "id",
ADD COLUMN     "patrimony" INTEGER NOT NULL,
ADD CONSTRAINT "hosts_pkey" PRIMARY KEY ("patrimony");
