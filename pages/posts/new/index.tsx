/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import axios from 'axios';
import Layout from '../../../components/MyLayout';
import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    cursor: pointer;
`;

interface SendPost {
    title: object | string | undefined;
    body: object | string | undefined;
}

function sendPost(post: SendPost): void {
    axios.post('https://simple-blog-api.crew.red/posts/', {
        title: post.title,
        body: post.body,
    });
}

const newPost = (): object => {
    const refBody = React.createRef<HTMLTextAreaElement>();
    const refTitle = React.createRef<HTMLInputElement>();
    let body: string;
    let title: string;

    function handleBodyChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
        body = e.target.value;
    }
    function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        title = e.target.value;
    }
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const post = {
            title,
            body,
        };
        sendPost(post);
        if (refBody.current) refBody.current.value = '';
        if (refTitle.current) refTitle.current.value = '';
    }

    return (
        <Layout>
            <h1>Create new post</h1>
            <form
                action=""
                method="post"
                onSubmit={(e): void => {
                    handleSubmit(e);
                }}
            >
                <label htmlFor="title">
                    Post Title
                    <br />
                    <input
                        ref={refTitle}
                        type="text"
                        name="title"
                        onChange={(e): void => {
                            handleTitleChange(e);
                        }}
                    />
                </label>
                <br />
                <label htmlFor="body">
                    Post body
                    <br />
                    <textarea
                        ref={refBody}
                        name="body"
                        onChange={(e): void => {
                            handleBodyChange(e);
                        }}
                    />
                </label>
                <br />
                <Button type="submit">submit</Button>
            </form>
        </Layout>
    );
};

export default newPost;
