import MainService from "./MainService";

// GET Request - Get Calculator Types
export const getCalculatorTypes = () => {
  return MainService.get("/api/calculators");
};

// GET Request - Get Calculator Types
export const getPublicCalculatorTypes = () => {
  return MainService.get("/api/calculators/public");
};

export const getCalculatorTypesForUser = (userId) => {
  return MainService.get(`/api/calculators/user/${userId}/getTypes`);
};

// GET Request - Get Calculator Types
export const getCalculatorType = (type_id) => {
  return MainService.get(`/api/calculators/overview/${type_id}`);
};

// POST Request - Save calculator Type
export const saveCalculatorType = (type_id, data) => {
  return MainService.post(`/api/calculators/overview/${type_id}`,
      data
  );
};

// PUT Request - Update calculator Type
export const updateCalculatorType = (type_id, data) => {
  return MainService.put(`/api/calculators/overview/${type_id}`,
      data
  );
};

// GET Request - Get Calculator Category
export const getCalculatorCategories = (type_id) => {
  return MainService.get(`/api/calculators/${type_id}`);
};

// POST Request - Save Calculator Category
export const saveCalculatorCategories = (type_id, data) => {
  return MainService.post(`/api/calculators/${type_id}`,
      data
  );
};

// DELETE Request - Delete Calculator Category
export const deleteCalculatorCategory = (type_id, data) => {
  return MainService.delete(`/api/calculators/${type_id}`,
      {data}
  );
};

// PUT Request - Update Calculator Category
export const updateCalculatorCategories = (type_id, data) => {
  return MainService.put(`/api/calculators/${type_id}`,
      data
  );
};

// GET Request - Get Calculator Inputs
export const getCalculatorInputs = (type_id, category_id) => {
  return MainService.get(`/api/calculators/${type_id}/${category_id}`);
};

// POST Request - Save Calculator Inputs
export const saveCalculatorInputs = (type_id, category_id, data) => {
  return MainService.post(`/api/calculators/${type_id}/${category_id}`,
      data
  );
};

// DELETE Request - Delete Calculator Inputs
export const deleteCalculatorInputs = (type_id, category_id, data) => {
  return MainService.delete(`/api/calculators/${type_id}/${category_id}`,
      {data}
  );
};

// PUT Request - Update Calculator Inputs
export const updateCalculatorInputs = (type_id, category_id, data) => {
  return MainService.put(`/api/calculators/${type_id}/${category_id}`,
      data
  );
};

export const getCalculatorUsers = (type_id) => {
  return MainService.get(`/api/calculators/getUsers/${type_id}`);
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
  return MainService.get(
    `/api/calculators/user/${userId}/${categoryId}/uniqueCompletedCount`
  );
};
