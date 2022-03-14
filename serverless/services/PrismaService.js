import { PrismaClient, Prisma } from "@prisma/client";
import MainService from "./MainService";

const prisma = new PrismaClient();


export const getInputsByCategory = (categoryId) => {
  return prisma.calculatorInput.findMany({
    where: {
      category_id: categoryId,
    },
    select: {
      id: true,
    },
  });
};

export const getCountOfUsersUniqueFilledResultsByCategory = (
  userId,
  idArray
) => {
  return prisma.calculatorResult.findMany({
    distinct: ["input_id"],
    where: {
      user_id: userId,
      input_id: { in: idArray },
    },
  });
};


export const createNewProject = (id, projectname, projectimage1, projectimage2, projectimage3, projectimage4, cptgbp, latitude, longitude, streetname, city, county, country, totalsupply, remainingsupply, ownerpicture, type, website, description, datefounded, nftaddress) => {
  return prisma.project.create({
    data: {
      id: '3',
      email: 'elsa@prisma.io',
      projectname: 'Elsa Prisma',
      projectimage1: 'elsa@prisma.io',
      projectimage2: 'Elsa Prisma',
      projectimage3: 'elsa@prisma.io',
      projectimage4: 'Elsa Prisma',
      cptgbp: 'elsa@prisma.io',
      latitude: 'Elsa Prisma',
      longitude: 'elsa@prisma.io',
      streetname: 'Elsa Prisma',
      city: 'elsa@prisma.io',
      county: 'Elsa Prisma',
      country: 'elsa@prisma.io',
      totalsupply: 'Elsa Prisma',
      remainingsupply: 'elsa@prisma.io',
      ownerpicture: 'Elsa Prisma',
      type: 'elsa@prisma.io',
      website: 'Elsa Prisma',
      description: 'elsa@prisma.io',
      datefoudned: 'Elsa Prisma',
      nftaddress: 'elsa@prisma.io',
    },
  })
};





