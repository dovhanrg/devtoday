/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import Link from 'next/link';
import Ancor from './Ancor';

const Header = (): JSX.Element => {
    return (
        <div>
            <Link href="/">
                <Ancor>Home</Ancor>
            </Link>
            <Link href="/posts/new">
                <Ancor>New Post</Ancor>
            </Link>
        </div>
    );
};

export default Header;
