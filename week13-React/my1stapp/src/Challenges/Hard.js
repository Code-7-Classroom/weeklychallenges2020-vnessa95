import React, { Component } from 'react';
import BasicInfo from '../Person/person'
import '../Hard.css';


//EASY
class Hard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: [
                {
                    name: "Vanessa Baker",
                    phone: "704-212-5398",
                    dob: "December 17th, 1995",
                    email: "Vnessabaker@gmail.com"
                },
                {
                    name: "Nancy Reanae",
                    phone: "704-345-1345",
                    dob: "March 11th, 1997",
                    email: "NancyR@gmail.com"
                },
                {
                    name: "Alissa Monet",
                    phone: "704-936-5008",
                    dob: "October 26th, 1999",
                    email: "AlissaMonet@gmail.com"
                }
            ]
        }
    }


    //VERY-EASY
    render() {
        return (
          <div className="info">
            {this.state.person.map(function(person){
              return (
                <BasicInfo name={person.name} phone={person.phone} dob={person.dob} email={person.email}/>
              )
            })}  
          </div>
        );
      }
    }

export default Hard;






