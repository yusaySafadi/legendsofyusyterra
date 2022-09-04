import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"



type Props = {}

export default function Navbar({}: Props) {
  return (
    <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/allCards">All Cards</StyledLink>
        <StyledLink to="/matchHistory">MatchHistory</StyledLink>
    </StyledNav>
  )
}


const StyledNav = styled.nav`
height: 70px;
display: flex;
font-size: 2rem;
gap:2rem;
padding-top: 1rem;
background-color:#1e1e1e ;
`
const StyledLink = styled(Link)`
display: block;
  color: #fdfaff;
  text-decoration: none;

  &.active{
    color: blue
  }
`