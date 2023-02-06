// eslint-disable-next-line
import React, { useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
//import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';

function ParadioNavbar() {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#">Paradio</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/cast">Cast</Nav.Link>
                    <Nav.Link as={Link} to="/trailer">Trailer</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
// Main Page Component
function MainPage() {
    return (
        <div>
            <ParadioNavbar />
            <h1>Welcome to the Paradio Movie Website!</h1>
        </div>
    );
}

// About Page Component
function AboutPage() {
    return (
        <div>
            <ParadioNavbar />
            <h1>About Paradio</h1>
            <p>Paradio is a thrilling new movie about a group of friends who discover a mysterious new world. Join them on an adventure you'll never forget!</p>
        </div>
    );
}

// Cast Page Component
function CastPage() {
    return (
        <div>
            <ParadioNavbar />
            <h1>Cast</h1>
            <ul>
                <li>John Doe as John</li>
                <li>Jane Doe as Jane</li>
                <li>Bob Smith as Bob</li>
                <li>Alice Johnson as Alice</li>
            </ul>
        </div>
    );
}

// Trailer Page Component
function TrailerPage() {
    return (
        <div>
            <ParadioNavbar />
            <h1>Trailer</h1>
            <p>Watch the exciting trailer for Paradio below:</p>
            <iframe
                title="Paradio Trailer"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

// App Component
export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<MainPage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/cast" element={<CastPage />} />
                <Route path="/trailer" element={<TrailerPage />}/>
            </Routes>
        </Router>
    );
}