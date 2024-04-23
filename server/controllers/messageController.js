const { Message } = require("../schema/messageSchema");

const sendMessage = async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  try {
    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !phone || !message) {
      throw new Error("Please fill out all fields.");
    }
    
    // Create a new message instance
    const newMessage = new Message({ firstName, lastName, email, phone, message });
    
    // Save the message document to the database
    await newMessage.save();

    res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    // Handle any errors that occur during message creation
    res.status(500).json({
      success: false,
      message: "Failed to send message.",
      error: error.message,
    });
  }
};

const getAllMessages = async (req, res, next) => {
  try {
    // Retrieve all messages from the database
    const messages = await Message.find();
    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    // Handle any errors that occur while retrieving messages
    res.status(500).json({
      success: false,
      message: "Failed to fetch messages.",
      error: error.message,
    });
  }
};

module.exports = {
  getAllMessages,
  sendMessage
};
