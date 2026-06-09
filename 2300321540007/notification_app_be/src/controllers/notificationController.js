const {
  fetchNotifications,
} = require("../services/notificationService");

async function getNotifications(req, res) {
  try {
    const notifications = await fetchNotifications();

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch notifications",
    });
  }
}

module.exports = {
  getNotifications,
};