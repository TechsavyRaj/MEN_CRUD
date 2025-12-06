# MEN_CRUD

A simple CRUD (Create, Read, Update, Delete) application built using **MongoDB + Express + Node.js**.  
This repo provides a basic backend setup to manage data via RESTful APIs.  

## 🚀 Features

- Create, Read, Update and Delete operations for records.  
- Uses MongoDB as database and Mongoose (or native driver) for data modeling.  
- Simple folder structure — suitable as a base for more complex backend projects.  

## 🧰 Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- (Optional) Mongoose ORM  

## 📂 Project Structure

```

MEN_CRUD/
│
├── models/            # Data models / schema definitions
├── .vscode/           # VS Code settings (optional)
├── index.js           # Entry point of the application / API server
├── package.json
└── package-lock.json

````

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14+, or as preferred)  
- MongoDB (local or remote)  
- npm (comes with Node)  

### Installation

```bash
# Clone the repository
git clone https://github.com/TechsavyRaj/MEN_CRUD.git

# Navigate to project folder
cd MEN_CRUD

# Install dependencies
npm install
````

### Configuration

Create a `.env` file (or configure directly in `index.js`) with MongoDB connection string. For example:

```
MONGO_URI=mongodb://localhost:27017/your-db-name
PORT=5000
```

### Running the Server

```bash
npm start
```

By default, the server will start on the port defined in your `.env` (or fallback). You can then use tools like Postman / cURL / Insomnia to test the CRUD APIs (e.g. GET, POST, PUT, DELETE on your endpoints).

## 📚 Usage Example

Assuming you have a `User` model:

```bash
# Create a new user (POST /users)
POST http://localhost:5000/users
Body: { "name": "Raj", "email": "raj@example.com", "age": 21 }

# Get all users (GET /users)
GET http://localhost:5000/users

# Get a single user (GET /users/:id)
GET http://localhost:5000/users/USER_ID

# Update a user (PUT /users/:id)
PUT http://localhost:5000/users/USER_ID
Body: { "name": "Alice Updated" }

# Delete a user (DELETE /users/:id)
DELETE http://localhost:5000/users/USER_ID
```

*(Note: adapt based on actual route names / models in your code.)*

## ✅ Contributing

Feel free to fork this repository and raise pull requests. If you add more features (e.g. authentication, validations, pagination, error handling), please update this README accordingly.

## 📄 License

This project is open-source, feel free to adapt and reuse.
