import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <h1 className="display-1 text-center my-5">Contact API</h1>
      <div className='btn-wrapper text-center mt-5 py-4'>
        <Link to="/newcontact" className="btn btn-info btn-lg mx-2">New Contact</Link>
        <Link to="/allcontacts" className="btn btn-dark btn-lg mx-2">All Contacts</Link>
      </div>

    </div>
  );
}

export default App;
