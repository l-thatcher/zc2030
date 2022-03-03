import MainService from "./MainService";

// GET Request - Get Calculator Types
export const getCalculatorTypes = () => {
    return MainService.get("/api/calculators");
}

// GET Request - Get Calculator Inputs
export const getCalculatorInputs = (id) => {
    return MainService.get(`/api/calculators/${id}`);
}