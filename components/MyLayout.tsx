/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import Header from './Header';
import styled from 'styled-components';
import Head from './Head';

const Div = styled.div`
    margin: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    font-family: 'Noto Sans', sans-serif;
`;

interface Layout {
    children?: JSX.Element[];
}

export default function Layout(props: Layout): JSX.Element {
    return (
        <Div>
            <Head />
            <Header />
            {props.children}
        </Div>
    );
}
