//EASY
import React, { Component } from 'react';

class Easy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {

            }
        }
    }


//VERY-EASY
    render = () => {
        return (
            <div className="info">
                <h1> Name: Vanessa Baker </h1>
                <h2> Phone: 704-212-5398 </h2>
                <h3> D.O.B: December 17th, 1995</h3>
                <h4> Email: Vnessabaker@gmail.com</h4>
            </div>
        );
    }

}

export default Easy;






