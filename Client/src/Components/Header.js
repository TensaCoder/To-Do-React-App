import React from 'react';
import '../CSS/header.css'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="">TO-DO Application</a>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" to=''>Contact</a>
            </li>
          </ul>
        </div>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search To-Do Item" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default Header
