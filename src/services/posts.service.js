const Post = require('../models/post.model');

/**
 * Fetches all posts from the database, populating the author's username.
 * @returns {Promise<Array>} Array of post documents
 */
const getAllPosts = async () => {
  return await Post.find().populate('author', 'username email').sort({ createdAt: -1 });
};

/**
 * Fetches a single post by its ID, populating the author's username.
 * @param {string} id - The post's MongoDB ObjectId
 * @returns {Promise<Object|null>} The post document or null
 */
const getPostById = async (id) => {
  return await Post.findById(id).populate('author', 'username email');
};

/**
 * Creates a new post in the database.
 * @param {Object} postData - The data for the new post (title, content, author)
 * @returns {Promise<Object>} The newly created post document
 */
const createPost = async (postData) => {
  return await Post.create(postData);
};

/**
 * Updates a post by its ID with new data.
 * @param {string} id - The post's MongoDB ObjectId
 * @param {Object} updateData - The fields to update
 * @returns {Promise<Object|null>} The updated post document or null
 */
const updatePost = async (id, updateData) => {
  return await Post.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
};

/**
 * Deletes a post by its ID.
 * @param {string} id - The post's MongoDB ObjectId
 * @returns {Promise<Object|null>} The deleted post document or null
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
