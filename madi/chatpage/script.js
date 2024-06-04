document.addEventListener("DOMContentLoaded", () => {
  const sendButton = document.getElementById("send-button");
  const messageInput = document.getElementById("message-input");
  const chatMessages = document.getElementById("chat-messages");

  sendButton.addEventListener("click", () => {
    const messageText = messageInput.value;
    if (messageText.trim() !== "") {
      addMessage("user", messageText);
      messageInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
    }
  });

  messageInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendButton.click();
    }
  });

  function addMessage(sender, text) {
    const message = document.createElement("div");
    message.classList.add("chat-message", sender);
    message.textContent = text;
    chatMessages.appendChild(message);
  }
});
