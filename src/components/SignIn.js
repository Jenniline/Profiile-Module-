import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';    
//import FormPersonalDetails from './FormPersonalDetails';
import UserInfo from './UserInfo';
import Success from './Success'


export class SignIn extends Component {
//methods here
        state = {
            step:1,
            Username:'',
            idcardnumber:'',
            Email:'', 
          Symptoms:'',
          Present_Location:'',
          Previous_Location:''        
         }


         //Proceed to next step

        nextStep = () => {
            const {step} = this.state;
            this.setState({ 
                step: step + 1
            });
        }

        //Go back to previous step
        
        prevStep = () => {
            const {step} = this.state;
            this.setState({ 
                step: step - 1
            });
        }

         //Handle fields change 
         handleChange = input => e =>{
            this.setState({[input]: e.target.value}); 
        }

<<<<<<< HEAD
            
=======
 
>>>>>>> 32eb6bb4498ec083e230babd4c27b61c1fa852bd

//end of the methods now we go to the render

    render() {

        const {step} = this.state;
        const {Username,idcardnumber,Email,Symptoms,Present_Location,Previous_Location} = this.state;
        const values = {Username,idcardnumber,Email,Present_Location,Previous_Location};

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                    nextStep = {this.nextStep}
                    handleChange= {this.handleChange}
                    values={values}
                    />
                )
                /*case 2:
                    return (
                        <FormPersonalDetails
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange= {this.handleChange}
                        values={values}
                        />
                    ) */
                case 2: 
                    return(
                        <UserInfo
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}     
                        values={values}
                        />
                    )
                case 3  :
                    return (<Success 
                    prevStep = {this.prevStep}     
                        values={values}
                    />
                    )
        }

    }
}

export default SignIn
