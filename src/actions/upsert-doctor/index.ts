"use server";

import { headers } from "next/headers";

import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import { upsertDoctorSchema } from "./schema";

export const upsertDoctor = async (input: unknown) => {
  const parsedInput = upsertDoctorSchema.parse(input);

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    throw new Error("Unauthorized");
  }
  if (!session.user.clinic?.id) {
    throw new Error("Clinic not found");
  }

  await db
    .insert(doctorsTable)
    .values({
      clinicId: session.user.clinic.id,
      ...parsedInput,
    })
    .onConflictDoUpdate({
      target: [doctorsTable.id],
      set: {
        ...parsedInput,
      },
    });
};
