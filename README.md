# Task Management System - PrimeTask

## 📌 Overview

This project is a full-stack Task Management System built as part of a Backend Developer Internship assignment. It demonstrates secure authentication, role-based access control, RESTful API design, and frontend integration.

Users can register, log in, and manage their personal tasks, while admins have elevated access to protected routes.

---

## ⚙️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Atlas)
* Mongoose
* JWT Authentication
* bcrypt (password hashing)
* cors

### Frontend

* React (Vite)
* Tailwind CSS
* Axios

### Deployment

* Backend: Render
* Frontend: Vercel

---

## 🔐 Features

### Authentication

* User registration with hashed passwords
* Secure login using JWT tokens
* Token-based authentication for protected routes

### Role-Based Access

* Default role: **user**
* Admin role assigned manually via database
* Admin-only route protected using middleware
* Conditional UI rendering based on role

### Task Management (CRUD)

* Create task
* View only tasks belonging to the authenticated user
* Update task
* Delete task
* Tasks are securely scoped to the logged-in user

### API Design

* RESTful API structure
* Versioned routes (`/api/v1`)
* Middleware-based architecture
* Input validation using `express-validator`

---

## 📁 Project Structure

```
backend/
  controllers/
  models/
  routes/
  middleware/
  config/
  app.js
  server.js

frontend/
  src/
    pages/
    services/
    App.jsx
```

---

## 🔗 Live Links

* 🌐 Frontend: https://prime-task-mu.vercel.app
* 🔧 Backend API: https://primetask-zkrz.onrender.com/api/v1

---

## 🧪 API Endpoints

### Auth

* `POST /api/v1/auth/register`
* `POST /api/v1/auth/login`

### Tasks

* `GET /api/v1/tasks`
* `POST /api/v1/tasks`
* `PUT /api/v1/tasks/:id`
* `DELETE /api/v1/tasks/:id`

### Role Test

* `GET /api/v1/test/user`
* `GET /api/v1/test/admin` (Admin only)

---

## 🔐 Security Practices

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes using middleware
* Role-based authorization
* Environment variables for sensitive data

---

## ⚡ Scalability Notes

* Modular architecture allows easy addition of new features
* Can be extended into microservices architecture
* Redis can be integrated for caching
* Load balancing can be applied using Nginx
* Docker can be used for containerized deployment

---

## 🛠️ Setup Instructions

### Backend

```
cd backend
npm install
npm run dev
```

### Frontend

```
cd frontend
npm install
npm run dev
```

---

## 📌 Environment Variables

### Backend (.env)

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=3000
```

### Frontend (.env)

```
VITE_API_URL=http://localhost:3000/api/v1
```

---

## 👑 Role Management

* All users are assigned the role `user` by default
* Admin role is assigned manually via database for security
* Admin users can access protected routes and see additional UI elements

---

## 📬 Submission

This project fulfills all the requirements of the assignment:

* Authentication with JWT
* Role-based access control
* CRUD operations
* Frontend integration
* Deployment-ready architecture

---

## 📊 Notes

This project demonstrates practical backend engineering concepts including authentication, authorization, API design, and deployment.
---

## Author

**Tejaswini Palwai**

---
