const express = require("express");
const { telegramToken } = require("./config/config");
const TelegramBot = require("node-telegram-bot-api");
const app = express();
const PORT = process.env.PORT || 3000;
const controller = require("./controllers/controller");
controller.init();
app.get("/", (req, res) => {
  res.send("telegram bot is runnning");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
// const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
// require("./controllers/controller")(bot);
// console.log("Tlegram bot is running");

// bot.on("polling_error", (error) => console.error(error));
