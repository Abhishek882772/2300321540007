const axios = require("axios");

async function fetchNotifications() {
  try {
    console.log("TOKEN =", process.env.ACCESS_TOKEN);
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log("STATUS:", error.response?.status);
    console.log("DATA:", error.response?.data);
    throw error;
  }
}

module.exports = {
  fetchNotifications,
};