const express = require('express')
const router = express.Router()
const {InsertPosts} = require('../controller/insertPosts')
const {GetPosts} = require('../controller/getPosts')

router.post('/posts', InsertPosts);

router.get('/posts/:id', GetPosts)

module.exports = router;