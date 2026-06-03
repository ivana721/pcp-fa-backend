import axios from "axios";

const BASE_URL = "https://t4e-testserver.onrender.com/api";

export const getToken = async () => {
  const res = await axios.post(`${BASE_URL}/public/token`, {
    studentId: "E0323021",
    password: "475787"
  });
  return res.data.token;
};

export const getData = async (token) => {
  const res = await axios.get(`${BASE_URL}/private/data`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};