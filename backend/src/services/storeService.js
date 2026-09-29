import prisma from "../dbconfig/db.js";

export const createStore = async (data) => {
  return prisma.store.create({
    data
  });
};

export const getStores = async () => {
  return prisma.store.findMany({
    orderBy: {
      name: "asc"
    }
  });
};

export const getStoreById = async (id) => {
  return prisma.store.findUnique({
    where: { id },

    include: {
      owner: {
        select: {
          id: true,
          name: true,
          email: true
        }
      }
    }
  });
};