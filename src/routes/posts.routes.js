const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} = require('../controllers/posts.controller');

// GET /api/v1/posts        → get all posts
// POST /api/v1/posts       → create a new post
router.route('/').get(getAllPosts).post(createPost);

// GET /api/v1/posts/:id    → get one post
// PATCH /api/v1/posts/:id  → update a post
// DELETE /api/v1/posts/:id → delete a post
router.route('/:id').get(getPostById).patch(updatePost).delete(deletePost);

module.exports = router;
