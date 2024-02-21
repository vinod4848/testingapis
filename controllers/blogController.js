const Blog = require("../schema/blogModel");

const BlogController = {
  getAllBlogs: async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createBlog: async (req, res) => {
    try {
      const newBlog = await Blog.create(req.body);
      res.status(201).json(newBlog);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getBlogById: async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.blogId);
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.json(blog);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateBlogById: async (req, res) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.blogId,
        req.body,
        { new: true }
      );
      if (!updatedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.json(updatedBlog);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteBlogById: async (req, res) => {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.blogId);
      if (!deletedBlog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.json(deletedBlog);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = BlogController;
