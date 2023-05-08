import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`${import.meta.env.BASE_URL}create-user`}> create user </Link>
          </li>
          <li>
            <Link to={`${import.meta.env.BASE_URL}login`}> login </Link>
          </li>
        </ul>
      </nav>
    </>
  )}

export default App
