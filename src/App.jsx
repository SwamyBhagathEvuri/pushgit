import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (searchData) => {
    console.log("Searching for:", searchData);
    // In next steps, we will set this data to show results
    setSearchResults(searchData);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Background Elements */}
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>

        <div className="content-wrapper">
          <header className="app-header">
            <h1 className="logo">Aero<span>Swift</span></h1>
            <nav>
              <a href="#" className="active">Book</a>
              <a href="#">My Trips</a>
              <a href="#">Check-in</a>
            </nav>
            <div className="user-profile">
              <div className="avatar">JD</div>
            </div>
          </header>

          <main className="main-content">
            {!searchResults ? (
              <div className="hero-section">
                <h1 className="hero-title">
                  Discover your next <br />
                  <span className="gradient-text">Great Adventure</span>
                </h1>
                <p className="hero-subtitle">Premium travel experience at your fingertips.</p>
                <SearchForm onSearch={handleSearch} />
              </div>
            ) : (
              <div className="results-placeholder glass p-8 text-center text-white">
                <h2 className="text-2xl mb-4">Flights to {searchResults.to}</h2>
                <button onClick={() => setSearchResults(null)} className="text-blue-400 hover:text-blue-300">
                  &larr; Back to Search
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
