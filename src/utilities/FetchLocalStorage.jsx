export const fetchUsers = () => {
    const userInfo =
      localStorage.getItem("users") !== "undefined"
        ? JSON.parse(localStorage.getItem("users"))
        : localStorage.clear();
  
    return userInfo;
  };

  export const fetchAUser = () => {
    const userInfo =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();
  
    return userInfo;
  };