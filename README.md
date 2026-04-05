# 🚀 Finance Data Processing & Access Control Backend

A backend system for managing financial records with **role-based access control**, built using Node.js, Express, and MongoDB.

---

## 🌐 Live API

👉 https://finance-backend-assignment-7rhe.onrender.com

---

## 🧠 Project Overview

This project simulates a **finance dashboard backend** where users interact with financial records based on their roles.

It demonstrates:

* Clean backend architecture
* Role-based access control (RBAC)
* Data modeling & API design
* Aggregated dashboard analytics

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Render (Deployment)

---

## 📂 Project Structure

```
/controllers
/models
/routes
/middleware
/config
server.js
```

---

## 👤 User Roles

| Role    | Permissions                |
| ------- | -------------------------- |
| Viewer  | Read-only access           |
| Analyst | Read + analytics           |
| Admin   | Full access (CRUD + users) |

---

## 🔐 Access Control Logic

* Middleware-based role validation
* Inactive users are blocked
* Unauthorized access returns `403 Forbidden`

---

## 👥 User Management APIs

### ➤ Create User

`POST /users`

📸 *(Add screenshot here)*

---

### ➤ Get All Users

`GET /users`

📸 *(Add screenshot here)*

### Example Response:

```json
[
  {
    "name": "Yashraj Dhamale",
    "role": "admin",
    "status": "active"
  },
  {
    "name": "Jhon",
    "role": "analyst",
    "status": "active"
  },
  {
    "name": "Ashitoosh Das",
    "role": "viewer",
    "status": "active"
  }
]
```

---

### ➤ Update User

`PUT /users/:id`

📸 *(Add screenshot here)*

---

## 💰 Financial Records APIs

### ➤ Create Record

`POST /records`

📸 *(Add screenshot here)*

---

### ➤ Get All Records

`GET /records`

📸 *(Add screenshot here)*

---

### ➤ Filter Records

#### By Type

`GET /records?type=income`

📸 *(Add screenshot here)*

#### By Category

`GET /records?category=salary`

📸 *(Add screenshot here)*

#### By Date

`GET /records?date=YYYY-MM-DD`

📸 *(Add screenshot here)*

---

### ➤ Update Record

`PUT /records/:id`

📸 *(Add screenshot here)*

---

### ➤ Delete Record

`DELETE /records/:id`

📸 *(Add screenshot here)*

---

## 📊 Dashboard APIs

### ➤ Summary

`GET /dashboard/summary`

Returns:

* Total Income
* Total Expenses
* Net Balance

📸 *(Add screenshot here)*

---

## ⚠️ Validation & Error Handling

* Input validation implemented
* Proper HTTP status codes used
* Clear error messages returned

Example:

```json
{
  "error": "Amount is required"
}
```

---

## 🔄 Active / Inactive Users

* Active users → allowed to access APIs
* Inactive users → blocked via middleware

---

## ⚙️ Setup Instructions

```bash
git clone <repo-link>
cd finance-backend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

## 🧪 API Testing

Tested using:

* Postman
* Thunder Client

---

## 💡 Assumptions

* Authentication is mocked using middleware
* Role-based access is enforced server-side
* Focus is on backend logic, not UI

---

## 🚀 Key Highlights

* Clean and scalable backend structure
* Role-based authorization (RBAC)
* Dashboard analytics implementation
* Proper error handling

---

## 📌 Conclusion

This project focuses on **clean backend architecture, maintainability, and real-world API design** rather than unnecessary complexity.

---

## 👨‍💻 Author

**Yashraj Dhamale**
