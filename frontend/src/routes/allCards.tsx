import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { GameData } from "../interfaces";

export default function AllCards() {
  const [data, setData] = useState<GameData[]>([]);
  useEffect(() => {
    fetch("http://localhost:5000/getData")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  return (
    <>
      {JSON.stringify(data) !== "{}" ? (
        data.map((f) => <StyledCardImage src={f.assets[0].gameAbsolutePath} alt="" />)
      ) : (
        <p>Loading....</p>
      )}
      <Outlet />
    </>
  );
}

const StyledCardGallery  = styled.div`
display: flex;
width: 40%;
`
const StyledCardImage = styled.img`
height: 250px;
width: auto;
`