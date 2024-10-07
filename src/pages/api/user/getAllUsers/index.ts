import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export default async function GetAllUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts = await prisma.userDetails.findMany({});

  return res.json(posts);
}
