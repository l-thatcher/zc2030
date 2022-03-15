import MainService from "./MainService";

// GET Request - Get Calculator Categories
export const getProjectsList = () => {
    return MainService.get(`/api/projects`);
};

export const getProjectById = (projectId) => {
    return MainService.get(`/api/projects/${projectId}`);
};

// POST Request - Create a new project
const data =  {
    id: '3',
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
}

export const createNewProject = (data) => {
    return MainService.post(`/api/projects/newproject`,
        data
    );
};
