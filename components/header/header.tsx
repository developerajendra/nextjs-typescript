import React from 'react'
import Link from 'next/link';

const Header =()=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link href='/home'><a className="navbar-brand" href="#">Kareval.com</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <Link href='/hospital'><a className="nav-link" href="#">Hospital <span className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Ayurveda</a>
                        </li>
                         
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cost Estimates</a>
                        </li>
                         
                        <li className="nav-item">
                            <a className="nav-link" href="#">Patient Story</a>
                        </li>
                         
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accreditation</a>
                        </li>
                         
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </nav>
        </div>
    )
}

export default Header
