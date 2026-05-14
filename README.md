# Blogify API 📝

A fully integrated, data-driven REST API for a blog platform built with **Node.js**, **Express**, and **MongoDB Atlas** using **Mongoose**.

## Features

- ✅ MongoDB Atlas cloud database integration
- ✅ Full CRUD operations for Posts
- ✅ Mongoose data models with validation
- ✅ One-to-many relationship (User → Posts) with `.populate()`
- ✅ Clean service layer architecture
- ✅ Thin controllers with proper error handling
- ✅ Environment-based configuration

## Project Structure

```
blogify-api/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── models/
│   │   ├── user.model.js      # User Mongoose model
│   │   └── post.model.js      # Post Mongoose model
│   ├── services/
│   │   └── posts.service.js   # All Mongoose query logic
│   ├── controllers/
│   │   └── posts.controller.js # Thin HTTP handlers
│   ├── routes/
│   │   └── posts.routes.js    # Express route definitions
│   ├── app.js                 # Express app setup
│   └── index.js               # Server entry point
├── .env                       # Environment variables (not committed)
├── .gitignore
├── package.json
└── README.md
```

## API Endpoints

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| GET    | `/api/v1/posts`       | Get all posts       |
| GET    | `/api/v1/posts/:id`   | Get post by ID      |
| POST   | `/api/v1/posts`       | Create a new post   |
| PATCH  | `/api/v1/posts/:id`   | Update a post       |
| DELETE | `/api/v1/posts/:id`   | Delete a post       |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/blogify-api.git
cd blogify-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/blogify?retryWrites=true&w=majority
PORT=3000
NODE_ENV=development
```

### 4. Run the development server

```bash
npm run dev
```

You should see:
```
MongoDB Connected: cluster0.xxxxx.mongodb.net
🚀 Server running in development mode on port 3000
```

## Sample Requests

### Create a Post
```json
POST /api/v1/posts
{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "author": "<mongodb_user_id>"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "author": "<mongodb_user_id>",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

## Architecture Decisions

- **Service Layer**: All Mongoose logic (`Post.find`, `Post.create`, etc.) is isolated in `posts.service.js`. Services have no knowledge of `req`/`res`.
- **Thin Controllers**: Controllers only handle HTTP concerns — extracting params, calling services, and sending responses.
- **Populate**: GET endpoints use `.populate('author', 'username email')` to return full author details instead of just an ObjectId.

## Author

**JJ** — Module 3 Integration Checkpoint, Kalvium Backend Development
