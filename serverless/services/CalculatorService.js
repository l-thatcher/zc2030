import MainService from "./MainService";

// GET Request - Get Calculator Types
export const getCalculatorTypes = () => {
    return MainService.get("/api/calculators");
}

// GET Request - Get Calculator Categories
export const getCalculatorCategories = (type_id) => {
    return MainService.get(`/api/calculators/${type_id}`);
}

// GET Request - Get Calculator Inputs
export const getCalculatorInputs = (type_id, category_id) => {
    return MainService.get(`/api/calculators/${type_id}/${category_id}`);
}