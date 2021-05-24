import React, {useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {Button, Input, InputWrapper, Label, PostsTitle} from "../styles";
import {MainLayout} from "./MainLayout";

const ChangePost = () => {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [disabled, setDisabled] = useState('');


    const submitHandler = (event) => {
        event.preventDefault()
        axios.delete(`https://simple-blog-api.crew.red/posts/${router.query.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        axios.post(`https://simple-blog-api.crew.red/posts`, {title, body, id: router.query.id})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        setDisabled('disabled')
    }
    const handleChangeTitle = (e) => {
        setTitle(
            e.target.value
        )
    }
    const handleChangeBody = (e) => {
        setBody(
            e.target.value
        )
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <InputWrapper>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        id='title'
                        value={title}
                        onChange={handleChangeTitle}
                    />

                    <Label htmlFor="body">Content</Label>
                    <Input
                        type="text"
                        id='body'
                        value={body}
                        onChange={handleChangeBody}
                    />
                </InputWrapper>
                <Button type='submit' disabled={disabled}>{"Change this post"}</Button>
                {
                    disabled === 'disabled' ? <PostsTitle>Post was changed</PostsTitle> : ''
                }
            </form>
        </div>
    );
};

export default ChangePost;
