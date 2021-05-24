import Link from "next/link";
import Head from "next/head";
import {Nav, NavLinks, Main} from '../styles'


export function MainLayout({children, title}) {
    return (
        <>
            <Head>
                <title>{title} | test task</title>
                <meta name='keywords' content='next, javascript, nextjs, react'/>
                <meta name='description' content='this is test task'/>
                <meta charSet='utf-8'/>
            </Head>
            <Nav>
                <Link href={'/'}><NavLinks>Posts</NavLinks></Link>
                <Link href={'/posts/new'}><NavLinks>Create new Post</NavLinks></Link>
            </Nav>
            <Main>
                {children}
            </Main>
        </>
    )
}