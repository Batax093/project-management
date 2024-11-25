/*
  Warnings:

  - You are about to drop the column `endDate` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `congnitoId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cognitoId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cognitoId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_congnitoId_key";

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "endDate",
ADD COLUMN     "dueDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "congnitoId",
ADD COLUMN     "cognitoId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_cognitoId_key" ON "User"("cognitoId");
