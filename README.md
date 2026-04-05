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

<img width="852" height="343" alt="2" src="https://github.com/user-attachments/assets/7f07ecbe-6746-48d2-95e6-cb2e89848e2c" />

<img width="975" height="540" alt="image" src="https://github.com/user-attachments/assets/4ed03045-be4d-4019-b843-90e103d1ae46" />

---

### ➤ Get All Users

`GET /users`

<img width="975" height="511" alt="image" src="https://github.com/user-attachments/assets/8e8e736b-8a50-4182-afe1-eb4e1ebd0d74" />


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

<img width="975" height="496" alt="image" src="https://github.com/user-attachments/assets/d18d00bf-524c-4fff-8ff3-beb8166ec436" />

<img width="975" height="496" alt="image" src="https://github.com/user-attachments/assets/3fe6f33b-ed4f-4d02-8d45-6c299080e682" />

<img width="975" height="496" alt="image" src="https://github.com/user-attachments/assets/014e9418-4edb-4723-b9f5-6b326d9b92c2" />


---

## 💰 Financial Records APIs

### ➤ Create Record

`POST /records`

<img width="975" height="496" alt="image" src="https://github.com/user-attachments/assets/c8aa1f1c-d107-41a0-b72c-418d2a1c48c7" />

<img width="975" height="632" alt="image" src="https://github.com/user-attachments/assets/5a21215a-f6ec-4436-83a1-005a78d46972" />


---

### ➤ Get All Records

`GET /records`

<img width="975" height="484" alt="image" src="https://github.com/user-attachments/assets/60c2c7b7-ee50-4fa7-91ce-60e7a30900c7" />

---

### ➤ Filter Records

#### By Type

`GET /records?type=income`

<img width="975" height="527" alt="image" src="https://github.com/user-attachments/assets/0075eb8e-81dd-40d4-a139-40c6616a0e8b" />


#### By Category

`GET /records?category=salary`

<img width="975" height="491" alt="image" src="https://github.com/user-attachments/assets/932b0672-838f-48ff-a433-3319a61db65d" />


#### By Date

`GET /records?date=YYYY-MM-DD`

<img width="975" height="490" alt="image" src="https://github.com/user-attachments/assets/b5dea446-b999-4c09-bba7-bc16319c6eab" />


---

### ➤ Update Record

`PUT /records/:id`
<img width="975" height="490" alt="image" src="https://github.com/user-attachments/assets/bf7d7b24-1d38-4eda-9ce7-6c88e5a3b8d9" />

<img width="975" height="490" alt="image" src="https://github.com/user-attachments/assets/4fbd4831-8d9f-48b1-bd45-187d426b80a1" />

<img width="975" height="497" alt="image" src="https://github.com/user-attachments/assets/d6ff6fa0-f0cd-455d-a06f-c1e1d933a6b3" />

---

### ➤ Delete Record

`DELETE /records/:id`

📸 *(Add screenshot here)*

---

## 📊 Dashboard APIs

### ➤ Summary

`GET /dashboard/summary`
<img width="975" height="492" alt="image" src="https://github.com/user-attachments/assets/fb151d9c-9814-45bd-b74f-e73c4b832d81" />

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
