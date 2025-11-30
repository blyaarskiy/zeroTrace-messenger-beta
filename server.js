const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// Отдаём файлы фронтенда из папки public
app.use(express.static(__dirname + "/public"));

// Логика чата через Socket.io
io.on("connection", (socket) => {
  console.log("Новый пользователь подключился");

  // Когда приходит сообщение от клиента, отправляем всем
  socket.on("message", (text) => {
    io.emit("message", text);
  });

  socket.on("disconnect", () => {
    console.log("Пользователь отключился");
  });
});

// Запуск сервера на порту 3000
http.listen(3000, () => {
  console.log("ZeroTrace Messenger запущен на http://localhost:3000");
});
