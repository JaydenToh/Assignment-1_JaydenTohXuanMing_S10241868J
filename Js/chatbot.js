/* Javascript for ChatBot */

document.addEventListener('DOMContentLoaded', function () {
    var sendButton = document.getElementById('send-button');
    if (sendButton) {
        sendButton.addEventListener('click', function () {
            sendMessage();
        });
    }

    function sendMessage() {
        var messageInput = document.querySelector('.chat-input textarea');
        var userMessage = messageInput.value.trim();

        if (userMessage !== '') {
            var chatbox = document.querySelector('.chatbox');

            // Add user message to the "chat enter" section
            var userChat = document.createElement('li');
            userChat.className = 'chat enter';
            userChat.innerHTML = '<p>' + userMessage + '</p>';
            chatbox.appendChild(userChat);

            // Clear the textarea after sending the user message
            messageInput.value = '';

            // delayed bot response
            setTimeout(function () {
                var botResponse = generateBotResponse(userMessage);

                // Move the bot response to the "chat reply" section
                var botChat = document.createElement('li');
                botChat.className = 'chat reply';
                botChat.innerHTML = '<p>' + botResponse + '</p>';
                chatbox.appendChild(botChat);

                // Scroll to the bottom of the chatbox to show the latest messages
                chatbox.scrollTop = chatbox.scrollHeight;
            }, 1000); // Adjust the delay as needed
        }
    }

    function generateBotResponse(userMessage) {
        // change the userMessage response to change what message the bot gives
        if (userMessage.toLowerCase().includes('hello')) {
            return "Hello! How can I assist you?";
        } else if (userMessage.toLowerCase().includes('I need information on books')) {
            return "Sure, here is some information...";
        } else {
            return "Sorry, can you repeat yourself?";
        }
    }
});




    










