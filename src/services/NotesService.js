import httpClient from "../http-common";

const getAll = () => {
  return httpClient.get("/notes");
};

const exportGetAll = { getAll };

export default exportGetAll;
