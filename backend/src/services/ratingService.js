import prisma from "../dbconfig/db.js";

export const submitRating = async (
  userId,
  storeId,
  rating
) => {
  return prisma.rating.upsert({
    where: {
      userId_storeId: {
        userId,
        storeId
      }
    },

    create: {
      userId,
      storeId,
      rating
    },

    update: {
      rating
    }
  });
};