/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import Layout from '../../components/MyLayout';
import Button from '../../components/Button';

interface Props {
    type: object;
    post: {
        type: object;
        title: string;
        body: string;
        id: number;
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
    const handleDeleteClick = (): void => {
        const { id } = props.post;
        axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);
    };
    const { post } = props;
    return (
        <Layout>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Button onClick={handleDeleteClick}>delete</Button>
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
