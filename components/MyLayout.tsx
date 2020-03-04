/* eslint-disable require-jsdoc */
import * as React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Head from 'next/head';

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
            <Head>
                <title>My awesome test task from develops.today</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" />
            </Head>
            <Header />
            {props.children}
        </Div>
    );
}
