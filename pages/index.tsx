import {MainLayout} from "../Components/MainLayout";
import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchPosts} from "../redux/actions/postActions";
import {
    PostsTitle,
    PostNavigation,
    PostLinks,
    PostNavigationWrapper,
    ContentWrapper,
    PostTitle,
    PostBody
} from '../styles'

export default function Post() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const selectPosts = ({posts}) => posts
    const posts = useSelector(selectPosts)


    return (
        <MainLayout title={'posts'}>
            <PostsTitle>Posts</PostsTitle>
            <hr/>
            <PostNavigationWrapper>
                {posts.reverse().map(post => (
                    <PostNavigation key={post.id}>
                        <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
                            <PostLinks>
                                <ContentWrapper>
                                    <PostTitle>
                                        {post.title}
                                    </PostTitle>
                                    <PostBody>
                                        {post.body}
                                    </PostBody>
                                </ContentWrapper>

                            </PostLinks>
                        </Link>
                    </PostNavigation>
                ))}
            </PostNavigationWrapper>
        </MainLayout>
    )
}