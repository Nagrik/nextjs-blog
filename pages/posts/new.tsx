import React, {useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";
import {MainLayout} from "../../Components/MainLayout";
import {Input, InputWrapper, Button, PostsTitle, Label} from '../../styles'


export default function New() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [disabled, setDisabled] = useState('');
    const [created, setCreated] = useState(false);


    const selectPosts = ({posts}) => posts
    const posts = useSelector(selectPosts)

    function returnLastItem(posts) {
        return posts[posts.length - 1];
    }

    const id = (returnLastItem(posts))

    const submitHandler = (event) => {
        event.preventDefault()

        axios.post(`https://simple-blog-api.crew.red/posts`, {title, body, id})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        setDisabled('disabled')
        setCreated(true)
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

        <MainLayout title={'New'}>
            <PostsTitle>{"Create new post"}</PostsTitle>
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
                <Button type='submit' disabled={disabled}>{"Create new post"}</Button>
            </form>
            {
                created ? <PostsTitle>Post was created</PostsTitle> : ''
            }

        </MainLayout>
    )
}