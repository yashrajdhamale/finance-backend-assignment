require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const mockUser = require("./middleware/mockUser");
const checkActive = require("./middleware/checkActive");

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());

// Inject mock user FIRST
app.use(mockUser);

// Then check active status
app.use(checkActive);

// ================= ROOT ROUTE (BROWSER UI) =================
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Finance Backend API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            padding: 40px;
          }
          h1 { color: #38bdf8; }
          h2 { color: #22c55e; margin-top: 20px; }
          ul { line-height: 1.8; }
          .box {
            background: #1e293b;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
          }
          a, button {
            color: #0f172a;
            background: #facc15;
            padding: 8px 12px;
            border-radius: 6px;
            text-decoration: none;
            margin: 5px;
            display: inline-block;
            border: none;
            cursor: pointer;
          }
          input {
            padding: 6px;
            margin: 5px;
            border-radius: 5px;
            border: none;
          }
          pre {
            background: #020617;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
          }
        </style>
      </head>
      <body>

        <h1>🚀 Finance Backend API</h1>
        <p><b>Status:</b> Running ✅</p>

        <div class="box">
          <h2>🌐 Live API</h2>
          <p>Base URL:</p>
          <a href="https://finance-backend-assignment-7rhe.onrender.com" target="_blank">
            Open API
          </a>
        </div>

        <div class="box">
          <h2>👤 Roles</h2>
          <ul>
            <li><b>Admin</b> → Full access</li>
            <li><b>Analyst</b> → Insights</li>
            <li><b>Viewer</b> → Read-only</li>
          </ul>
        </div>

        <div class="box">
          <h2>📊 Quick API Actions (Try Here 👇)</h2>

          <button onclick="callAPI('/users')">Get Users</button>
          <button onclick="callAPI('/records')">Get Records</button>
          <button onclick="callAPI('/dashboard/summary')">Get Summary</button>

          <br><br>

          <input id="type" placeholder="type (income/expense)">
          <button onclick="filterType()">Filter by Type</button>

          <input id="category" placeholder="category">
          <button onclick="filterCategory()">Filter by Category</button>

          <input id="date" placeholder="YYYY-MM-DD">
          <button onclick="filterDate()">Filter by Date</button>

          <h3>📦 Response:</h3>
          <pre id="output">Click any button to see response...</pre>
        </div>

        <div class="box">
          <h2>🔗 Endpoints</h2>
          <ul>
            <li>GET /users</li>
            <li>GET /records</li>
            <li>GET /dashboard/summary</li>
          </ul>
        </div>

        <div class="box">
          <h2>👨‍💻 Author</h2>
          <p>Yashraj Dhamale</p>
        </div>

        <script>
          const baseURL = "https://finance-backend-assignment-7rhe.onrender.com";

          async function callAPI(endpoint) {
            const res = await fetch(baseURL + endpoint);
            const data = await res.json();
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
          }

          function filterType() {
            const type = document.getElementById("type").value;
            callAPI('/records?type=' + type);
          }

          function filterCategory() {
            const category = document.getElementById("category").value;
            callAPI('/records?category=' + category);
          }

          function filterDate() {
            const date = document.getElementById("date").value;
            callAPI('/records?date=' + date);
          }
        </script>

      </body>
    </html>
  `);
});

// ================= HEALTH CHECK =================
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is healthy ✅" });
});

// ================= ROUTES =================
app.use("/users", userRoutes);
app.use("/records", recordRoutes);
app.use("/dashboard", dashboardRoutes);

// ================= START SERVER AFTER DB =================
connectDB()
  .then(() => {
    console.log("DB Connected ✅");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB connection failed ❌", err);
    process.exit(1);
  });