console.log("URL:", `${process.env.BASE_URL}/auth/login`);
console.log("ID:", process.env.STUDENT_ID);
const axios = require("axios");

async function login() {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/auth/login`,
      {
        studentId: process.env.STUDENT_ID,
        password: process.env.PASSWORD,
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log("ERROR:");
    console.log(error.response?.data || error.message);
  }
}

module.exports = login;