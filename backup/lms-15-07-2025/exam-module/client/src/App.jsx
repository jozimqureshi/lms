import './App.css';

// import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import AllExams from "./components/ViewExams";
import NewExam from "./components/NewExam";
import Footer from "./components/Footer";
import ViewExams from './components/ViewExams';
import Welcome from './components/Welcome';

const strTitle = "Title by Prop: ";
// const location = useLocation();

// useEffect()

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-light py-3">
          <div className="container">
            <Header /> {/* Slicing */}
          </div>
        </header>
        <main className="flex-grow-1 py-4">
          <div className="container">

          <Welcome />

            {/* Routing */}
            <Routes>
              <Route path="/"
              element={<Home title="Home" />} />
              <Route
                path="/view-exams/*"
                element={<ViewExams title="View Exams" />}
              />
              <Route
                path="/new-exam"
                element={<NewExam title="New Exam" />}
              />
            </Routes>
          </div>
        </main>
        <footer className="bg-dark text-white py-3 mt-auto">
          <div className="container text-center">
            <Footer /> {/* Slicing */}
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
