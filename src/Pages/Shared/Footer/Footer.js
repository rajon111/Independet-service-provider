import React from 'react';
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <>
        <footer className='mt-2'>
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h2 className='footer-sce-title'>Company</h2>
                                <ul>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Support</h2>
                                <ul>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Services</h2>
                                <ul>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                    <li>
                                        <a href="#" className='text-white'>about</a>
                                    </li>
                                    <li>
                                        <a href="#">about</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Follow Us</h2>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="">
                                         
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <hr />
                <div className="mt-2 mb-0">
                    <p className='text-center w-100'>&copy; {year} The Best Creative Directors. All right and reserved.</p>
                </div>

            </div>
        </footer>
        </>
    );
};

export default Footer;