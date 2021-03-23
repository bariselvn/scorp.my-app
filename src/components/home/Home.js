import React, { Component } from 'react'
import { Image } from 'react-bootstrap';
import lotus from '../../lotus.png'


class Home extends Component {
    constructor() {
        super();

    }
    render() {
        return (
            <div className="home-wrapper">
                <div className="home-inner">                  
                        <Image src={lotus} rounded style={{width :"100%"}}/>           
                </div>
            </div>
        )
    }
}
export default Home