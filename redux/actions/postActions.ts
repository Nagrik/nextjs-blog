import {DELETE_POST, SET_LOADED_POSTS, SET_POSTS} from "../constants";
import axios from "axios";

export type PostsActionType = setPostsType | setDeleteType | setLoadedPostsType

type setPostsType = {
    type: typeof SET_POSTS,
    payload: object
}
type setDeleteType = {
    type: typeof DELETE_POST,
    payload: number
}
type setLoadedPostsType = {
    type: typeof SET_LOADED_POSTS,
    payload: boolean
}




export const setLoadedPosts = (payload: boolean): setLoadedPostsType => ({
    type: SET_LOADED_POSTS,
    payload
})

export const setPosts = (post: { id: number; title: string; body: string }): setPostsType => ({
    type: SET_POSTS,
    payload: post
})


export const setDeletePosts = (id: number): setDeleteType => ({
    type: DELETE_POST,
    payload: id
})

export const fetchPosts = () => (dispatch:any) => {
    dispatch(setLoadedPosts(false))
    axios.get('https://simple-blog-api.crew.red/posts').then(({data}) => {
        dispatch(setPosts(data))
    })
}
