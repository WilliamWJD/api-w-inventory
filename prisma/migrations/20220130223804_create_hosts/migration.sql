-- CreateTable
CREATE TABLE "hosts" (
    "id" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hosts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "hosts_hostname_key" ON "hosts"("hostname");

-- CreateIndex
CREATE UNIQUE INDEX "hosts_department_key" ON "hosts"("department");

-- CreateIndex
CREATE UNIQUE INDEX "hosts_group_key" ON "hosts"("group");

-- CreateIndex
CREATE UNIQUE INDEX "hosts_user_key" ON "hosts"("user");
