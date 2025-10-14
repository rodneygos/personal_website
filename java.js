// Function 1: Show welcome message
        function showWelcomeMessage() {
            const messageBox = document.getElementById('messageBox');
            const messageText = document.getElementById('messageText');
            
            messageText.textContent = 'Welcome! Thanks for visiting my portfolio. Feel free to explore my skills and connect with me!';
            messageBox.classList.add('show');
        }

        // Function 2: Toggle between dark and light mode
        let isDarkMode = false;

        function toggleTheme() {
            isDarkMode = !isDarkMode;
            
            if (isDarkMode) {
                document.body.style.backgroundColor = '#1a1a1a';
                document.body.style.color = '#f0f0f0';
                document.querySelectorAll('.intro, .skills-hobbies, .links').forEach(el => {
                    el.style.backgroundColor = '#2a2a2a';
                    el.style.color = '#f0f0f0';
                });
                alert('Dark Mode Activated! 🌙');
            } else {
                document.body.style.backgroundColor = '#f8f9fa';
                document.body.style.color = '#333';
                document.querySelectorAll('.intro, .skills-hobbies, .links').forEach(el => {
                    el.style.backgroundColor = 'white';
                    el.style.color = '#333';
                });
                alert('Light Mode Activated! ☀️');
            }
        }

        // Function 3: Update contact information dynamically
        function updateContactInfo() {
            const contactBox = document.getElementById('contactBox');
            const contactText = document.getElementById('contactText');
            
            const email = 'Mutyabarodney@email.com';
            const phone = '+256 700 000 000';
            
            contactText.innerHTML = `<strong>Email:</strong> ${email}<br><strong>Phone:</strong> ${phone}<br>Feel free to reach out for collaborations or inquiries!`;
            contactBox.classList.add('show');
        }

        // Event listener example: Show message when page loads
        window.addEventListener('load', function() {
            console.log('Portfolio page loaded successfully!');
        });