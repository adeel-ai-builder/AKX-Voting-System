/* ==================================================
   INITIAL STORAGE SETUP
   ================================================== */

if (!localStorage.getItem("candidates")) {
    localStorage.setItem("candidates", JSON.stringify([]));
    localStorage.setItem("votes", JSON.stringify({}));
}

if (!localStorage.getItem("voted")) {
    localStorage.setItem("voted", "false");
}

if (!localStorage.getItem("adminLoggedIn")) {
    localStorage.setItem("adminLoggedIn", "false");
}

/* ==================================================
   ROLE SELECTION (index.html)
   ================================================== */

function selectRole(role) {
    localStorage.setItem("role", role);
    window.location.href = "login.html";
}

/* ==================================================
   LOGIN LOGIC (login.html)
   ================================================== */

function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let role = localStorage.getItem("role");
    let msg = document.getElementById("loginMsg");

    if (user === "" || pass === "") {
        msg.innerText = "❌ Enter username and password";
        return;
    }

    // ADMIN LOGIN
    if (role === "admin" && user === "admin" && pass === "12345") {
        localStorage.setItem("adminLoggedIn", "true");
        window.location.href = "admin.html";
    }
    // VOTER LOGIN
    else if (role === "voter" && user === "voter" && pass === "123") {
        window.location.href = "voter.html";
    }
    else {
        msg.innerText = "❌ Invalid credentials";
    }
}

/* ==================================================
   ADMIN PAGE PROTECTION (admin.html)
   ================================================== */

if (window.location.pathname.endsWith("admin.html")) {
    if (localStorage.getItem("adminLoggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

/* ==================================================
   LOGOUT
   ================================================== */

function logout() {
    localStorage.removeItem("adminLoggedIn");
    localStorage.removeItem("role");
    window.location.href = "index.html";
}

/* ==================================================
   ADMIN FUNCTIONS (admin.html)
   ================================================== */

function addCandidate() {
    let name = document.getElementById("candidateName").value.trim();

    if (name === "") {
        alert("Enter candidate name");
        return;
    }

    let candidates = JSON.parse(localStorage.getItem("candidates"));
    let votes = JSON.parse(localStorage.getItem("votes"));

    if (candidates.includes(name)) {
        alert("Candidate already exists");
        return;
    }

    candidates.push(name);
    votes[name] = 0;

    localStorage.setItem("candidates", JSON.stringify(candidates));
    localStorage.setItem("votes", JSON.stringify(votes));

    document.getElementById("candidateName").value = "";
    showResults();
}

/* ==========================
   RESULT DISPLAY (ADMIN)
   ========================== */

function showResults() {
    let votes = JSON.parse(localStorage.getItem("votes"));
    let output = "";

    for (let c in votes) {
        output += `
            <div class="result-row">
                <span class="result-name">${c}</span>
                <span class="result-votes">${votes[c]} vote(s)</span>
            </div>
        `;
    }

    let div = document.getElementById("results");
    if (div) div.innerHTML = output;
}

function resetElection() {
    localStorage.setItem("candidates", JSON.stringify([]));
    localStorage.setItem("votes", JSON.stringify({}));
    localStorage.setItem("voted", "false");
    showResults();
}

/* ==================================================
   VOTER FUNCTIONS (voter.html)
   ================================================== */

function loadCandidates() {
    let candidates = JSON.parse(localStorage.getItem("candidates"));
    let html = "";

    for (let c of candidates) {
        html += `
            <div class="card">
                <span>${c}</span>
                <input type="radio" name="vote" value="${c}">
            </div>
        `;
    }

    let div = document.getElementById("candidates");
    if (div) div.innerHTML = html;
}

function submitVote() {

    if (localStorage.getItem("voted") === "true") {
        document.getElementById("message").innerText =
            "❌ You have already voted.";
        return;
    }

    let radios = document.getElementsByName("vote");
    let selected = "";

    for (let r of radios) {
        if (r.checked) selected = r.value;
    }

    if (selected === "") {
        document.getElementById("message").innerText =
            "❌ Please select a candidate.";
        return;
    }

    let votes = JSON.parse(localStorage.getItem("votes"));
    votes[selected]++;

    localStorage.setItem("votes", JSON.stringify(votes));
    localStorage.setItem("voted", "true");

    document.getElementById("message").innerText =
        "✅ Vote submitted successfully!";
}

/* ==================================================
   AUTO LOAD (IMPORTANT)
   ================================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Load candidates on voter page
    if (document.getElementById("candidates")) {
        loadCandidates();
    }

    // Load results on admin page
    if (document.getElementById("results")) {
        showResults();
    }

});
