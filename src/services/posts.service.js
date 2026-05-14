const Post = require('../models/post.model');

/**
 * Fetches all posts, sorted by newest first.
 * Author username and email are populated via ref.
 * @returns {Promise<Array>} Array of post documents
 */
const getAllPosts = async () => {
  return await Post.find()
    .populate('author', 'username email')
    .sort({ createdAt: -1 });
};

/**
 * Fetches a single post by its MongoDB ObjectId.
 * Author username and email are populated via ref.
 * @param {string} id - The post's ObjectId string
 * @returns {Promise<Object|null>} The post document, or null if not found
 */
const getPostById = async (id) => {
  return await Post.findById(id).populate('author', 'username email');
};

/**
 * Creates a new post document in the database.
 * @param {Object} postData - Must include { title, content, author }
 * @returns {Promise<Object>} The newly created post document
 */
const createPost = async (postData) => {
  return await Post.create(postData);
};

/**
 * Finds a post by ID and applies partial updates.
 * Runs schema validators on the updated fields.
 * @param {string} id - The post's ObjectId string
 * @param {Object} updateData - Partial fields to update
 * @returns {Promise<Object|null>} The updated post, or null if not found
 */
const updatePost = async (id, updateData) => {
  return await Post.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

/**
 * Deletes a post by its MongoDB ObjectId.
 * @param {string} id - The post's ObjectId string
 * @returns {Promise<Object|null>} The deleted post, or null if not found
 */
const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
