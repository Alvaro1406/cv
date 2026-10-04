import { prisma } from "~~/server/utils/prisma";

export default defineEventHandler(async (event) => {
  try {
    const [workExperience] = await Promise.all([
      prisma.workExperience.findMany({
        include: {
          projects: true,
        },
      }),
    ]);

    return {
      success: true,
      data: workExperience,
    };
  } catch (error) {
    console.error("Error getting work experience:", error);
    throw error;
  }
});
