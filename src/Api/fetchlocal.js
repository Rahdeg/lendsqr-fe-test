export const fetchUsers = () => {
  const usersinfo =
    localStorage.getItem("users") !== "undefined"
      ? JSON.parse(localStorage.getItem("users"))
      : localStorage.clear();
  return usersinfo;
};

export const fetchUser = () => {
  const userinfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return userinfo ? userinfo : [];
};
