# Mini Express API

A minimal Express.js app, built as a practice in express apps, API building, and deployment. 

Features:
- Basic routes (`/hello`, `/echo`, `/protected`)
- Middleware for request logging and error handling
- `.env`-based config
- Ready to deploy on Render or Railway

---

## Quick Start

### 1. Clone & Install  
``` bash
git clone https://github.com/yourusername/mini-express-app.git  
cd mini-express-app  
npm install
```

### 2. Environment Setup  
Create a `.env` file:
```bash
PORT=3000  
SECRET_KEY=your-secret-key
```

### 3. Run Locally 
```bash 
npm run dev
```

---

## Endpoints

### GET /hello  
Returns "Hello World!".  

**Example:**  
```bash
curl http://localhost:3000/hello
```

---

### POST /echo  
Echoes back the posted JSON body.

**Example:** 
```bash 
curl -X POST http://localhost:3000/echo \  
  -H "Content-Type: application/json" \  
  -d '{"message": "Hello"}'
```

---

### GET /protected  
Requires a valid token in the `Authorization` header (e.g., `Bearer mysecret`).

**Example:**  
```bash
curl http://localhost:3000/protected \  
  -H "Authorization: Bearer your-secret-key"
```

---

## Middleware

- **Request Logging** – logs all incoming requests
- **Error Handling** – basic 500 fallback
- **Environment Variables** – uses `dotenv` for `.env` config

---

## Deployment

## ☁️ Deployment

### 🌍 Live on Render  
View the deployed app:  
https://mini-express-app.onrender.com

### How to Deploy to Render  
1. Push repo to GitHub  
2. Create a new **Web Service** on [Render](https://render.com)  
3. Set:
   - **Build Command**: npm install  
   - **Start Command**: npm start  
   - **Environment Variables**: `SECRET_KEY`

Render automatically sets the `PORT` value, so use `process.env.PORT || 3000` in your code.

---

## License

MIT – free to use and modify.
