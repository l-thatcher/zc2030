import MainService from "./MainService";

// GET Request - Get Calculator Categories
export const getProjectsList = () => {
    return MainService.get(`/api/projects`);
};

export const getProjectById = (projectId) => {
    return MainService.get(`/api/projects/${projectId}`);
};

// POST Request - Create a new project
export const createNewProject = (id, projectname, projectimage1, projectimage2, projectimage3, projectimage4, cptgbp, latitude, longitude, streetname, city, county, country, totalsupply, remainingsupply, ownerpicture, type, website, description, datefounded, nftaddress) => {
    return MainService.post(`/api/projects/newproject`,
        data
    );
};
