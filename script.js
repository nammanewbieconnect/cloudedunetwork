//slideshow homepage
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}  // Loop back to the first slide
    slides[slideIndex - 1].style.display = "block";  // Show the current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) {slideIndex = 1} // Reset if exceeds number of slides
    if (slideIndex < 1) {slideIndex = slides.length} // Loop back to last slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

/* Chat bot */
// Sound effect
// Sound effect
const sound = new Audio('notification.mp3'); // Ensure this file exists in your project

// Open and close the chat window
const chatWindow = document.getElementById('chatbot');
const closeChatButton = document.getElementById('close-chat');

// Automatically open the chat window when the page loads
window.onload = () => {
    chatWindow.style.display = 'flex';
    sound.play(); // Play sound when opened
};

function toggleChat() {
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
        sound.play(); // Play sound when opened
    } else {
        chatWindow.style.display = 'none';
    }
}

closeChatButton.addEventListener('click', () => {
    chatWindow.style.display = 'none'; // Close the chat window
});

// Handle user input and bot responses
const sendButton = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messages = document.getElementById('messages');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
        displayMessage('You: ' + userMessage);
        userInput.value = '';

        // Simple bot response logic
        const botResponse = getBotResponse(userMessage);
        displayMessage('Bot: ' + botResponse);
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}

function getBotResponse(input) {
    // Simple predefined responses
    const responses = {
        "hello": "Hi there! How can I help you?",
        "what courses do you offer?": "We offer courses in Cloud & Infrastructure, Software & Design, and Project Management.",
        "help": "Sure! What do you need help with?",
        "default": "I'm sorry, I didn't understand that. Can you please rephrase?",
        "bye": "Goodbye! Have a great day!",
        "hi": "Hello How can I help you?"
    };
    return responses[input.toLowerCase()] || responses["default"];
}