/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  date: {type: Date, default: Date.now},
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog