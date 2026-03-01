# MERN Review System - Frontend

Frontend for MERN stack review system - React application with user reviews and admin dashboard.

## Setup Instructions

### Step 1: Clone the Repository
```bash
git clone https://github.com/Aryankaushik541/mern-review-system-frontend.git
cd mern-review-system-frontend
```

### Step 2: Copy Frontend Files from Original Repository

The frontend files need to be copied from the original repository. You can do this manually:

1. Clone the original repository:
```bash
git clone https://github.com/Aryankaushik541/mern-review-system.git temp-repo
```

2. Copy the frontend files:
```bash
# Copy all files from client/src/pages to src/pages
cp -r temp-repo/client/src/pages ./src/

# Clean up
rm -rf temp-repo
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Configure Environment
Copy `.env.example` to `.env` and update the backend API URL:
```bash
cp .env.example .env
```

Edit `.env` and set your backend URL:
```
REACT_APP_API_URL=http://localhost:5000
```

### Step 5: Run the Application
```bash
npm start
```

The application will open at `http://localhost:3000`

## Backend Repository

The backend code is in the main repository:
https://github.com/Aryankaushik541/mern-review-system

## Features

- User authentication (Login/Signup)
- Password reset functionality
- Public review submission
- Admin dashboard
- Review management
- Real-time reply functionality
- Responsive design

## Tech Stack

- React 18
- React Router DOM
- Modern CSS with gradients
- RESTful API integration
