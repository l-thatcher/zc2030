import MainService from "./MainService";

// GET Request - Get Calculator Categories
export const getProjectsList = () => {
    return MainService.get(`/api/projects`);
};

export const getProjectById = (projectId) => {
    return MainService.get(`/api/projects/${projectId}`);
};

// POST Request - Create a new project
export const createNewProject = (data) => {
    return MainService.post(`/api/projects`,
        data
    );
};
