import { useState } from 'react';
import { useEffect } from 'react';
import {Outlet}from "react-router-dom"

export default function AllCards(){
    const [data, setData] = useState({});
  useEffect(()=>{
    fetch("http://localhost:5000/getData").then((res) => res.json()).then((d)=> setData(d));
  },[])
    return(
        <>
        {JSON.stringify(data) !== '{}'? console.log(typeof([])) : <p>Loading....</p>}
      {JSON.stringify(data) !== '{}'? data.map((f)=>(<img src={f.assets[0].gameAbsolutePath} alt=""></img>)): <p>Loading....</p>}
      {/*JSON.stringify(data) !== '{}'? data.vocabTerms.map((f) => (
          <p> {f.name} : {f.description}</p>
      )): <p>Loading...</p>*/}
      <Outlet/>
        </>
    )
}