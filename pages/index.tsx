/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/MyLayout';
import Ancor from '../components/Ancor';

interface Post {
    getInitialProps?: object;
    id?: number;
    title?: string;
}
interface Props {
    type: object;
    posts: Array<object>;
}

const Li = styled.li`
    list-style: none;
`;

const Index: Post = (props: Props) => {
    const { posts } = props;
    return (
        <Layout>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: Post) => (
                    <Li key={post.id}>
                        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                            <Ancor>{post.title}</Ancor>
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

// import { NextPage } from 'next';

// const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
//   <h1>Hello world! - user agent: {userAgent}</h1>
// );

// Home.getInitialProps = async ({ req }) => {
//   const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
//   return { userAgent };
// };

// export default Home;
