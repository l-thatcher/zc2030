import MainService from "./MainService";

// GET Request - Get all users
export const getUserData = () => {
    return MainService.get("/api/users");
};

// GET Request - Get all admins
export const getAdminData = () => {
    return MainService.get("/api/admin");
};

// PUT Request - Set a new admin
export const addNewAdmin = (email) => {
    return MainService.put(`/api/admin/${email}`);
};