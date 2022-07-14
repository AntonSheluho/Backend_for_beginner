import express from 'express'
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import Post from './Post.js';
import router from './router.js';

const PORT = 5000
const DB_Url = 'mongodb+srv://Admin:rJYSt7S8Ns4eFeKH@cluster0.m8bcu.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_Url, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log("Hello"))
    } catch (error) {
        console.log(error)
    }
}

startApp()
