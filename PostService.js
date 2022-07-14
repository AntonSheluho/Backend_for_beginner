import Post from "./Post.js";
import FileService from "./FileService.js";

class PostService {

    async create(post, picture) {
        const fileName = FileService.saveFile(picture)
        const createdPost = await Post.create({...post, picture: fileName})
        // const createdPost = await Post.create(post)
        return createdPost
    }

    async getAll() {
        const posts = await Post.find();
        return posts
    }

    async getOne(id) {
        if(!id) {
            throw new Error('Id не указан')
        }
        const post = await Post.findById(id);
        return post
    }

    async update(post) {
        if(!post._id) {
            // res.status(400).json({message: 'Id не указан'})
            throw new Error('Id не указан')
        }
        const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatePost
    }

    async delete(id) {
        if(!id) {
            // res.status(400).json({message: 'Id не указан'})
            throw new Error('Id не указан')
        }
        const post = await Post.findByIdAndDelete(id);
        return post
    }
}
export default new PostService()