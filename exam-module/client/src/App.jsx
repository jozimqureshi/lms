import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import AllExams from './components/AllExams'
import NewExam from './components/NewExam'
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-light py-3">
          <div className="container">
            <Header />
          </div>
        </header>
        <main className="flex-grow-1 py-4">
          <div className="container">
            {/* Routing here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/all-exams" element={<AllExams />} />
              <Route path="/new-exam" element={<NewExam />} />
            </Routes>
          </div>
        </main>
        <footer className="bg-dark text-white py-3 mt-auto">
          <div className="container text-center">
            <Footer />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
