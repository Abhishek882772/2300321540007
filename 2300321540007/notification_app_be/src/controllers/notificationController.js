const {
  fetchNotifications,
} = require("../services/notificationService");

async function getNotifications(req, res) {
  try {
    const notifications = await fetchNotifications();

    res.status(200).json(notifications);
  } catch (error) {
    console.log("CONTROLLER ERROR:");
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  getNotifications,
};