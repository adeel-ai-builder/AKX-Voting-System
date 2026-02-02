# AKX-Voting-System
A frontend-based Online Voting System built using HTML, CSS, and JavaScript, featuring role-based access (Admin & Voter), secure navigation, and a modern user interface.
This project is ideal for learning frontend logic, DOM manipulation, and GitHub Pages deployment.
## 🚀 Live Demo
https://adeel-ai-builder.github.io/AKX-Voting-System/

## 📌 Features
👤 Role-Based Access

Admin

Login with username & password

Add candidates

View live voting results

Reset election

Voter

Login with username & password

Vote for one candidate only

Cannot modify candidates

🗳️ Voting Rules

One vote per person (browser-based)

Candidates are predefined by Admin

Votes are counted automatically

Results displayed clearly (name on left, votes on right)

🎨 User Interface

Light, professional gradient design

Smooth animations & transitions

Responsive card-based layout

Clean alignment (candidate name left, radio right)

🛠️ Technologies Used

HTML5 – Page structure

CSS3 – Styling, gradients, animations

JavaScript (Vanilla) – Logic, DOM manipulation, state handling

localStorage – Temporary data storage (frontend simulation)

GitHub Pages – Hosting

📁 Project Structure
online-voting-system/
│
├── index.html        # Role Selection (Start Page)
├── login.html        # Login Page (Admin / Voter)
├── admin.html        # Admin Panel
├── voter.html        # Voter Page
├── style.css         # Global Styling
├── script.js         # Application Logic
└── README.md         # Project Documentation

🔐 Login Credentials (Demo)
Admin

Username: admin

Password: 12345

Voter

Username: voter

Password: 123

⚠️ Note: These credentials are hardcoded for learning purposes only.

🧠 How the System Works

index.html loads first (GitHub Pages default)

User selects Admin or Voter

Login page verifies credentials

User is redirected based on role:

Admin → admin.html

Voter → voter.html

Voting & results are handled using JavaScript and localStorage

⚠️ Important Disclaimer

This project is a frontend simulation.

❌ No backend

❌ No database

❌ No real authentication

✔ Designed for learning, practice, and demonstrations

For real-world voting systems, a secure backend and database are required.

🎓 Use Cases

University / College Project

Frontend Practice

JavaScript Logic Demonstration

GitHub Portfolio Project

Viva / Interview Explanation

📈 Possible Future Enhancements

Admin password change

Multiple voter accounts

Vote result charts

Backend integration (Node.js / PHP)

Database storage

Winner highlighting

Mobile-first UI improvements

👨‍💻 Author

Adeel Khan
Frontend Developer | AI & Web Enthusiast
