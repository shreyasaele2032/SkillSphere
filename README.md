# SkillSphere 🚀

SkillSphere is a full-stack freelance marketplace built using the MERN stack. It connects clients and freelancers on a single platform where clients can post jobs, freelancers can showcase their skills through gigs and portfolios, communicate in real time, track project milestones, and make secure online payments.

---

## 📌 Features

### 👤 Authentication
- JWT-based authentication
- Role-based login (Client & Freelancer)
- Secure registration and login

### 💼 Freelancer Features
- Create, edit, and delete gigs
- Build professional profiles
- Upload portfolio projects
- Apply for jobs
- Track milestones

### 🏢 Client Features
- Post job opportunities
- Browse freelancer gigs
- View freelancer profiles
- Hire freelancers
- Manage project milestones

### 💬 Real-Time Chat
- One-to-one messaging
- Socket.io integration
- Instant message delivery

### 💳 Payments
- Razorpay payment integration
- Secure payment verification
- Payment history

### 📊 Dashboard
- Personalized dashboards
- Job management
- Gig management
- Milestone tracking

---

# 🛠 Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router
- Axios

## Backend
- Node.js
- Express.js
- JWT Authentication
- Socket.io

## Database
- MongoDB
- Mongoose

## Payment Gateway
- Razorpay

---

# 📂 Project Structure

```
SkillSphere
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── .gitignore
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── socket
│   ├── config
│   ├── server.js
│   ├── package.json
│   └── .gitignore
│
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/SkillSphere.git
```

```bash
cd SkillSphere
```

---

## Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=8006
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_secret_key
```

Start the backend

```bash
npm start
```

---

## Frontend Setup

Open another terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_API_URL=http://localhost:8006/api
```

Run the frontend

```bash
npm run dev
```

---

# 📷 Screenshots

Add screenshots of:

- Home Page
- Login Page
- Dashboard
- Freelancer Profile
- Client Profile
- Gig Details
- Chat
- Payments
- Milestones

---

# Future Enhancements

- Email Notifications
- Video Calling
- AI-powered Freelancer Recommendation
- Rating & Review System
- Admin Dashboard
- Project Analytics

---

# Author

**Shreyas A S**

Information Science Engineering Student

National Institute of Engineering, Mysuru

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_PROFILE

---

# License

This project is licensed under the MIT License.
