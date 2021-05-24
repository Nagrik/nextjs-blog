import axios from "axios";
import Link from 'next/link'
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/post";
import React, {useState} from "react";
import {MainLayout} from "../../Components/MainLayout";
import ChangePost from "../../Components/ChangePost";
import {Button, MainPostText, PostLinks, PostsTitle} from "../../styles";

interface PostPageProps {
    data: MyPost
}

export default function Post({data}: PostPageProps) {
    const [disabled, setDisabled] = useState('');

    const deletePost = () => {
        axios.delete(`https://simple-blog-api.crew.red/posts/${data.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        setDisabled('disabled')
    }

    return (
        <MainLayout title={`Post `}>
            <PostsTitle>{data.title}</PostsTitle>
            <hr/>
            <MainPostText>{data.body}</MainPostText>
            <Link href={'/'}><PostLinks>Back to all posts</PostLinks></Link>
            <Button onClick={deletePost} disabled={disabled}>Delete this post</Button>
            {
                disabled === 'disabled' ? <PostsTitle>Post was deleted</PostsTitle> : ''
            }

            <ChangePost/>
        </MainLayout>
    )
}


interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

export async function getServerSideProps({query}: NextPageContext) {
    const res = await axios.get(`https://simple-blog-api.crew.red/posts/${query.id}`)
    const data: MyPost = await res.data

    return {props: {data}}
}