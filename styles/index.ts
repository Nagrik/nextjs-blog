import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  height: 60px;
  left: 0;
  right: 0;
  top: 0;
  background: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
`

export const NavLinks = styled.nav`
  font-size: 24px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  font-weight: 700;
`
export const Main = styled.nav`
  margin-top: 60px;
  padding: 1rem;
`

export const PostsTitle = styled.h1`
  text-align: center;
`

export const PostNavigationWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 15px;
  justify-content: space-around;
`
export const PostNavigation = styled.li`
  height: 350px;
  width: 550px;
  border: 1px solid #ccc;
  list-style: none;
  margin-top: 15px;
  padding: 10px 5px;
`

export const PostLinks = styled.a`
  display: flex;
  font-size: 21px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  padding-top: 10px;
  align-items: center;
  justify-content: center;

`

export const MainPostText = styled.p`
  font-size: 21px;
  color: black;
  padding: 30px 15px;
`

export const Button = styled.button`
  font-size: 18px;
  color: black;
  box-sizing: border-box;
  padding: 10px 5px;
  border: 1px solid #ccc;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
`

export const Input = styled.input`
  height: 50px;
  width: 500px;
`

export const Label = styled.label`
  margin-top: 50px;
`

export const ContentWrapper = styled.div`
`

export const PostTitle = styled.div`
  border-bottom: 1px solid #ccc;
  width: 535px;
  text-align: center;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const PostBody = styled.div`
  font-size: 21px;
  font-weight: 500;
  padding: 1rem;
  overflow-y: scroll;
  height: 250px;
`
