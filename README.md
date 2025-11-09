Perfect 👏 since your project is already connected to **MongoDB Atlas**, let’s make you a **professional README** that looks great on GitHub and clearly explains how to set up and run your full-stack Job Portal project.

Below is a clean, developer-ready README.md that fits your repo exactly.
You can copy and paste this into a new file named `README.md` in your project root.

---

## 🧾 README.md

````markdown
# 💼 IFSD Job Portal

A full-stack **Job Portal** web application built using **React (Vite)** for the frontend and **Node.js + Express + MongoDB Atlas** for the backend.  
It allows users to register as **Job Seekers** or **Employers**, post and apply for jobs, and manage applications easily.

---

## 🚀 Features

### 👤 Authentication & Roles
- JWT-based login and registration  
- Separate roles for **Employer** and **Job Seeker**
- Secure cookies (`httpOnly`, `SameSite`, etc.)

### 💼 For Employers
- Post new job openings  
- View all your job posts  
- See all job seekers who applied  

### 🧑‍💼 For Job Seekers
- Browse all jobs  
- Apply for jobs  
- View all your applications

### ☁️ Cloud & Storage
- MongoDB Atlas for database  
- Cloudinary integration for storing uploaded files

---

## 🛠️ Tech Stack

| Layer | Technologies |
|--------|---------------|
| **Frontend** | React + Vite, React Router, Axios, React Hot Toast |
| **Backend** | Node.js, Express.js, Mongoose, JWT, Bcrypt |
| **Database** | MongoDB Atlas |
| **Cloud** | Cloudinary |
| **Tools** | dotenv, cookie-parser, express-fileupload, cors |

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend/` folder with the following variables:

```env
PORT=5000
DB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
CLOUDINARY_CLOUD_NAME=<your_cloud_name>
CLOUDINARY_API_KEY=<your_api_key>
CLOUDINARY_API_SECRET=<your_api_secret>
JWT_SECRET=mySuperSecretKey123
COOKIE_EXPIRE=5
FRONTEND_URL=http://localhost:5173
````

---

## 🧩 Folder Structure

```
job-portal-main/
│
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   └── vite.config.js
│
└── README.md
```

---

## 🧰 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Devansh3000/IFSD-job-portal-.git
cd IFSD-job-portal-
```

### 2️⃣ Install dependencies

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd ../frontend
npm install
```

---

## ▶️ Running the project locally

### Start the backend server:

```bash
cd backend
npm start
```

You should see:

```
✅ MongoDB Connected Successfully!
🚀 Server running on port 5000
```

### Start the frontend app:

```bash
cd ../frontend
npm run dev
```

Then open your browser and go to
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🧪 Test credentials (optional demo)

If you’d like to test quickly, register a new user:

* Role: Employer or Job Seeker
* Email & password (anything)
  Then log in using the same credentials.

---

## 🌍 Deployment (Optional)

You can deploy using:

* **Frontend** → Vercel / Netlify
* **Backend** → Render / Railway / Cyclic
* **MongoDB Atlas** → stays the same (no change needed)

---

## 👨‍💻 Author

**Devansh**
📧 [GitHub Profile](https://github.com/Devansh3000)

---

## 🪪 License

This project is open-source and available under the **MIT License**.

````

---

### ✅ What to do next

1. Copy the above text into a new file named `README.md` in your root folder.  
2. Run:
   ```bash
   git add README.md
   git commit -m "Add professional README"
   git push
````

3. Refresh your GitHub repo — you’ll see the new formatted README appear beautifully.

---

Would you like me to make this README include **MongoDB Atlas connection instructions with screenshots/steps** too (for teammates or deployment)?
