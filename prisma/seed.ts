import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: "بیتا شجاع",
    username: "bita",
    email: "9bBt4@example.com",
    password: "123456",
  },
];

export async function main() {
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}
main().then(() => console.log("Done!"));
