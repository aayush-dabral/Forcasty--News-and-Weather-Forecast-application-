import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='Nav' style={{marginBottom: '10px'}}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">FORCASTY</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                            <li className="nav-item"><Link className="nav-link" to="/news/">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/news/Business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/news/Entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/news/Health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/news/Science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/news/Sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/news/Technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
