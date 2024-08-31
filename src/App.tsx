import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Skillset from './components/Skillset';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div
            id="top"
            className="absolute -z-20 flex w-full grid-cols-2 flex-col bg-gradient-to-b from-[#021729] via-[#1e0833] via-70% to-[#090011] md:flex-row"
        >
            <div className="sticky col-span-1">
                <Navbar />
            </div>
            <div className="col-span-1 flex w-full flex-col md:pl-24">
                <Home />
                <Profile />
                <Skillset />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;

/*
<div className="relative flex w-full flex-col md:pl-24">
                    <Home />
                    <Profile />
                    <Skillset />
                    <Experience />
                    <Projects />
                    <Contact />
                </div>
*/
