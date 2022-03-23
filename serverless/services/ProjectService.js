import MainService from "./MainService";

// GET Request - Get Calculator Categories
export const getProjectsList = () => {
  return MainService.get(`/api/projects`);
};

// GET Request - Get Calculator Categories
export const getListedProjectsList = () => {
  return MainService.get(`/api/projects/listed`);
};

export const getProjectById = (projectId) => {
  return MainService.get(`/api/projects/${projectId}`);
};

// POST Request - Create a new project
export const createNewProject = (data) => {
  return MainService.post(`/api/projects`, data);
};

// PUT Request - Create a new project
export const editProjectById = (data, id) => {
  return MainService.put(`/api/projects/${id}/edit`, data);
};

// POST Request - Transfer tokens request from farm to user
export const transferCarbonFromFarm = (data, id) => {
  return MainService.post(`/api/projects/${id}/purchase`, data);
};
