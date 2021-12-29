import React from 'react'
import './styles.css'

const header = () => {
    return (
        <div className='header'>
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-xl">
    <a class="navbar-brand active-green" href="#">INSTANT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active-green" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
        </ul>
        </div>
        </div>

            </nav>
            
        </div>
    )
}

export default header
