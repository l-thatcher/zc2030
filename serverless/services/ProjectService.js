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

// PUT Request - Create a new project
export const editProjectById = (data, id) => {
    return MainService.put(`/api/projects/${id}/edit`,
        data
    );
};