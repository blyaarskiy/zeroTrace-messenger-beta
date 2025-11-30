const socket = io();
const msgInput = document.getElementById("msg");
const sendBtn = document.getElementById("send");
const messagesBox = document.getElementById("messages");

sendBtn.onclick = () => {
  const text = msgInput.value.trim();
  if (text.length === 0) return;

  socket.emit("message", text);
  msgInput.value = "";
};

socket.on("message", (text) => {
  const div = document.createElement("div");
  div.className = "message";
  div.innerText = text;
  messagesBox.appendChild(div);
  messagesBox.scrollTop = messagesBox.scrollHeight;
});
