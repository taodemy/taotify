const tokenHandler = {
  getToken: () => {
    return {
      token: localStorage.getItem("token"),
    };
  },
  setToken: (email: string, user: string, token: string) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    localStorage.setItem("email", email);
  },
  removeToken: () => {
    localStorage.removeItem("token");
  },
};

export default tokenHandler;
