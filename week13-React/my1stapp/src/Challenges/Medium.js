import React, { Component } from 'react';
import BasicInfo from '../Person/person'


//EASY
class Medium extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {
                name: "Vanessa Baker",
                phone: "704-212-5398",
                dob: "December 17th, 1995",
                email: "Vnessabaker@gmail.com"
            }
        }
    }


//VERY-EASY
    render() {
        return (
            <div className="info">
                <BasicInfo name={this.state.person.name} phone={this.state.person.phone} dob={this.state.person.dob} email={this.state.person.email}/>
            </div>
        );
    }

}

export default Medium;






