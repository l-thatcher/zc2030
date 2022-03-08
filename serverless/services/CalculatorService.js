import MainService from "./MainService";

// GET Request - Get Calculator Types
export const getCalculatorTypes = () => {
  return MainService.get("/api/calculators");
};

// GET Request - Get Calculator Categories
export const getCalculatorCategories = (type_id) => {
  return MainService.get(`/api/calculators/${type_id}`);
};

// GET Request - Get Calculator Inputs
export const getCalculatorInputs = (type_id, category_id) => {
  return MainService.get(`/api/calculators/${type_id}/${category_id}`);
};

// POST Request - Save calculator result
export const saveCalculatorResult = (type_id, category_id, input_id, data) => {
  return MainService.post(
    `/api/calculators/${type_id}/${category_id}/${input_id}`,
    data
  );
};

// GET Request - Get User Category Progress
export const getUserCategoryProgress = (userId, categoryId) => {
  return MainService.get(`/api/calculators/user/${userId}/${categoryId}`);
};
