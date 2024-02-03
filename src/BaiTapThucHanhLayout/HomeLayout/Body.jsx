import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        return (
            <div>
                <div className="container mt-3 mb-3">
                    <div className="jumbotron">
                        <h1 className="display-4">A Warm Welcome!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4" />
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                    </div>
                    <div className="row">
                        <div className="card col-2.5 mr-4 ml-3" style={{ width: '15rem' }}>
                            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card col-2.5 mr-4 ml-3" style={{ width: '15rem' }}>
                            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card col-2.5 mr-4 ml-3" style={{ width: '15rem' }}>
                            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="card col-2.5 mr-4 ml-3" style={{ width: '15rem' }}>
                            <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
