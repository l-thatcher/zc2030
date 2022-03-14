import MainService from "./MainService";

// GET Request - Get Calculator Categories
export const getProjectsList = () => {
    return MainService.get(`/api/projects`);
};

export const getProjectById = (projectId) => {
    return MainService.get(`/api/projects/${projectId}`);
};



