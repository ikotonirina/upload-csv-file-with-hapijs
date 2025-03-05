# CSV Upload Processor

This project consists of two parts: a **backend** built with **Hapi.js** (Node.js) and a **frontend** built with **React 18 + Vite**. The application allows users to upload a CSV file, which is processed by the backend, splitting the data into separate files based on gender and returning a compressed ZIP file.

## **Table of Contents**

- [CSV Upload Processor](#csv-upload-processor)
  - [**Table of Contents**](#table-of-contents)
  - [**Backend**](#backend)
    - [**Installation**](#installation)
    - [**Running the Server**](#running-the-server)
    - [**Testing**](#testing)
    - [**API Endpoints**](#api-endpoints)
  - [**Frontend**](#frontend)
    - [**Installation**](#installation-1)
    - [**Running the App**](#running-the-app)
    - [**Testing**](#testing-1)
  - [**Environment Variables**](#environment-variables)
    - [**Backend (`backend/.env`)**](#backend-backendenv)
    - [**Frontend (`frontend/.env`)**](#frontend-frontendenv)

---

## **Backend**

The backend is built with **Hapi.js** and handles the file processing logic.

### **Installation**

Navigate to the backend directory and install dependencies:

```sh
cd backend
npm install
```

### **Running the Server**

To start the backend server:

```sh
npm run dev
```

The server runs on `http://localhost:4000` by default.

### **Testing**

Run unit tests using Jest:

```sh
npm test
```

### **API Endpoints**

| Method | Endpoint  | Description                         |
| ------ | --------- | ----------------------------------- |
| `POST` | `/upload` | Uploads a CSV file and processes it |

---

## **Frontend**

The frontend is built with **React 18** and **Vite**.

### **Installation**

Navigate to the frontend directory and install dependencies:

```sh
cd frontend
npm install
```

### **Running the App**

To start the frontend development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173`.

### **Testing**

Run unit tests using Vitest:

```sh
npm test
```

---

## **Environment Variables**

Both frontend and backend require environment variables. Create a `.env` file in each directory:

### **Backend (`backend/.env`)**

```env
PORT=4000
```

### **Frontend (`frontend/.env`)**

```env
VITE_API_BASE_URL=http://localhost:4000
```

**After modifying `.env`, restart the servers.**
