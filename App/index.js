// Filename: index.js
// Combined code from all files

// This file combines HTML and CSS for a static restaurant website

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Website</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        header {
            background-color: #DAA520;
            padding: 10px 0;
            text-align: center;
        }

        header h1 {
            color: #fff;
            margin: 0;
        }

        nav ul {
            list-style: none;
            padding: 0;
        }

        nav ul li {
            display: inline;
            margin: 0 10px;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }

        .section {
            padding: 20px;
            text-align: center;
        }

        #home {
            background: url('https://picsum.photos/1600/800?random=1') no-repeat center center/cover;
            color: #fff;
            height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .section h2 {
            font-size: 2em;
            margin-bottom: 10px;
        }

        .section p, .section ul {
            font-size: 1.2em;
            margin-bottom: 20px;
        }

        #menu ul {
            list-style: none;
            padding: 0;
        }

        #menu ul li {
            margin: 10px 0;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        label {
            margin-top: 10px;
        }

        input[type="text"], 
        input[type="email"], 
        textarea {
            margin-top: 5px;
            padding: 10px;
            width: 100%;
            max-width: 400px;
            box-sizing: border-box;
        }

        button {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #DAA520;
            color: #fff;
            border: none;
            cursor: pointer;
            font-size: 1em;
        }

        button:hover {
            background-color: #FFC107;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            font-size: 0.8em;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Delicious Restaurant</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section id="home" class="section">
        <h2>Welcome to Delicious Restaurant</h2>
        <p>Enjoy the finest culinary delights prepared by our expert chefs.</p>
    </section>
    <section id="menu" class="section">
        <h2>Our Menu</h2>
        <ul>
            <li>Grilled Chicken - $12.99</li>
            <li>Spaghetti Carbonara - $14.99</li>
            <li>Caesar Salad - $9.99</li>
            <li>Margherita Pizza - $13.99</li>
        </ul>
    </section>
    <section id="about" class="section">
        <h2>About Us</h2>
        <p>Delicious Restaurant has been serving excellent food since 2000. Our chefs use the freshest ingredients to create delicious meals.</p>
    </section>
    <section id="contact" class="section">
        <h2>Contact Us</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
    <footer>
        <p>&copy; 2023 Delicious Restaurant. All rights reserved.</p>
    </footer>
</body>
</html>`;
 
console.log(htmlContent);