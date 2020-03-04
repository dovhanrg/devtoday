/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import { useState } from 'react';
import Layout from '../../components/MyLayout';
import Button from '../../components/Button';

interface Props {
    type: object;
    post: {
        title: string;
        body: string;
        id?: number;
    };
}

interface Post {
    getInitialProps?: object;
}

interface Context {
    type: object;
    query: {
        type: object;
        id: number;
    };
}

const Post: Post = (props: Props) => {
    const [isNotDeleted, setDeleted] = useState(true);
    const [post, setPost] = useState(props.post);
    const { id } = props.post;
    const handleDeleteClick = (): void => {
        if (isNotDeleted) {
            axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);
            setDeleted(false);
            setPost({ title: '', body: 'Post has been deleted.', id: post.id });
        }
    };
    return (
        <Layout>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Button onClick={handleDeleteClick}>Delete Post</Button>
        </Layout>
    );
};

Post.getInitialProps = async function(context: Context): Promise<object> {
    const { id } = context.query;
    const res = await axios.get(`https://simple-blog-api.crew.red/posts/${id}`);
    const post = res.data;

    return { post };
};

export default Post;
