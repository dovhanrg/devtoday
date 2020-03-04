import * as React from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../components/MyLayout';
import Ancor from '../components/Ancor';
import Li from '../components/Li';

interface Post {
    getInitialProps?: object;
    id?: number;
    title?: string;
}
interface Props {
    type: object;
    posts: Array<object>;
}

const Index: Post = (props: Props) => {
    const { posts } = props;
    return (
        <Layout>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: Post) => (
                    <Li key={post.id}>
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <h3>
                                <Ancor>{post.title}</Ancor>
                            </h3>
                        </Link>
                    </Li>
                ))}
            </ul>
        </Layout>
    );
};

Index.getInitialProps = async function(): Promise<object> {
    const res = await axios.get('https://simple-blog-api.crew.red/posts');

    return {
        posts: res.data,
    };
};

export default Index;
