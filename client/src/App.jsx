import "./App.css";

// import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import NewExam from "./components/NewExam";
import Footer from "./components/Footer";
import ViewExams from "./components/ViewExams";
import Welcome from "./components/Welcome";
import ProtectedRoute from "./components/ProtectedRoute"; // To check authentication

const strTitle = "Title by Prop: ";

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
              <Route path="/" element={<Home title="Home" />} />

              {/* All Exams related Routes are needed to be wrapped up within ProtectedRoute in order to view the Exams and their sub-components to login/authenticated users only  */}

              {/* Protected Route */}
              <Route
                path="/view-exams/*"
                element={
                  <ProtectedRoute>
                    <ViewExams title="View Exams" />
                  </ProtectedRoute>
                }
              />

              {/* Protected Route */}
              <Route
                path="/new-exam"
                element={
                  <ProtectedRoute>
                    <NewExam title="New Exam" />
                  </ProtectedRoute>
                }
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
