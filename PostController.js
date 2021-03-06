import PostService from "./PostService.js"

class PostController {
    async create(req, res) {
        try {
            // console.log(req.files)
            // const post = await PostService.create(req.body)
            const post = await PostService.create(req.body, req.files.picture)
            res.json(post)
        } catch (error) {
            res.status(500).json(error)
            console.log('error here', error.message)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
            // const post = req.body
            // if(!post._id) {
            //     res.status(400).json({message: 'Id не указан'})
            // }
            const updatePost = await PostService.update(req.body)
            return res.json(updatePost)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            // const {id} = req.params
            // if(!id) {
            //     res.status(400).json({message: 'Id не указан'})
            // }
            const post = await PostService.delete(req.params.id);
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default new PostController()