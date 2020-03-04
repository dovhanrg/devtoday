/* eslint-disable require-jsdoc */
import axios from 'axios';
import React from 'react';
import Layout from '../../../components/MyLayout';
import Form from '../../../components/Form';
import InputText from '../../../components/InputText';
import Textarea from '../../../components/Textarea';
import Button from '../../../components/Button';

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
        if (refBody.current !== null) refBody.current.value = '';
        if (refTitle.current !== null) refTitle.current.value = '';
    }

    return (
        <Layout>
            <h1>Create new post</h1>
            <Form
                action=""
                method="post"
                onSubmit={(e): void => {
                    handleSubmit(e);
                }}
            >
                <label htmlFor="title">
                    Post Title
                    <br />
                    <InputText
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
                    <Textarea
                        ref={refBody}
                        name="body"
                        onChange={(e): void => {
                            handleBodyChange(e);
                        }}
                    />
                </label>
                <br />
                <Button type="submit">submit</Button>
            </Form>
        </Layout>
    );
};

export default newPost;
