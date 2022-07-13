import express from 'express'
import mongoose from 'mongoose';
import Post from './Post.js';

const PORT = 5000
const DB_Url = 'mongodb+srv://Admin:rJYSt7S8Ns4eFeKH@cluster0.m8bcu.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())

app.get('/', ((req, res) => {
    res.json("server is working 12345 6")
    console.log(req.query)
}))

app.post('/', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body
        const post = await Post.create({author, title, content, picture})
        res.json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

async function startApp() {
    try {
        await mongoose.connect(DB_Url, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log("Hello"))
    } catch (error) {
        console.log(error)
    }
}

startApp()
