import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  
  
  return (
    <>
    <Navbar/>
    <div className="App">
      <PageWrapper>
        <Outlet/>
      </PageWrapper>
    </div>
    </>
  );
}
const PageWrapper = styled.div`
width: 80%;
margin: 0 auto;

`
export default App;
