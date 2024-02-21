const express = require('express');
const BlogController = require("../controllers/blogController");

const router = express.Router();

router.get('/blogs', BlogController.getAllBlogs);
router.post('/blogs', BlogController.createBlog);
router.get('/blogs/:blogId', BlogController.getBlogById);
router.put('/blogs/:blogId', BlogController.updateBlogById);
router.delete('/blogs/:blogId', BlogController.deleteBlogById);

module.exports = router;
