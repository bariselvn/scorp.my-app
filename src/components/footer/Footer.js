import React, { Component } from 'react'
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="">
                <footer className="footer">
                    <div className="container-text">
                        <p className="text-center">Copyright @2020| Designed With by <a href="#">Lotus React</a></p>
                        <ul className="social_footer_ul">
                            <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href=""><i className="fab fa-twitter"></i></a></li>
                            <li><a href=""><i className="fab fa-linkedin"></i></a></li>
                            <li><a href=""><i className="fab fa-instagram"></i></a></li>
                        </ul>

                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer