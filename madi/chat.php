<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Chat Page</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="chat-container">
    <div class="chat-header">
      <h1>Chat</h1>
    </div>
    <div class="chat-messages" id="chat-messages">
      <!-- Messages will appear here -->
      <?php
      if (isset($_GET['message'])) {
        echo '<div class="message">' . htmlspecialchars($_GET['message']) . '</div>';
      }
      ?>
    </div>
    <div class="chat-input">
      <input type="text" id="message-input" placeholder="Type a message..." />
      <button id="send-button">Send</button>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
