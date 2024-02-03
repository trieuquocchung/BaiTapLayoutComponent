import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="navbar-dark bg-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#">Start Bootstrap</a>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="#">About</a>
                                <a className="nav-item nav-link" href="#">Service</a>
                                <a className="nav-item nav-link" href="#">Contact</a>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        )
    }
}
