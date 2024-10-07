import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export default async function Create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { name, phoneNumber, role } = req.body;
    const result = await prisma.userDetails.create({
      data: {
        name: (name && name) || "",
        phoneNumber: (phoneNumber && phoneNumber) || "",
        role: (role && role) || "",
      },
    });

    return res.json(result);
  }
}
