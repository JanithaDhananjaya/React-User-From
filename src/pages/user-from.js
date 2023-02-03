import React, {Component} from 'react';
import axios from "axios";

class UserFrom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '', last_name: '', email: '', password: ''
        }

    }

    changeFirstName = (e) => {
        const value = e.target.value;
        this.setState(
            {
                first_name: value
            }
        )
    }

    changeLastName = (e) => {
        const value = e.target.value;
        this.setState(
            {
                last_name: value
            }
        )
    }

    changeEmail = (e) => {
        const value = e.target.value;
        this.setState(
            {
                email: value
            }
        )
    }

    changePassword = (e) => {
        const value = e.target.value;
        this.setState(
            {
                password: value
            }
        )
    }

    submitFormData = (e) => {
        e.preventDefault();
       const user= {
           first_name: this.state.first_name,
           last_name: this.state.last_name,
           email: this.state.email,
           password: this.state.password,
       }
        axios.post('http://localhost:5000/user', user, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        return (<form onSubmit={this.submitFormData}>
            <h2>User Form</h2>
            <label htmlFor="first_name"></label>
            <input id='first_name' name='first_name' onChange={this.changeFirstName}/>
            <br/>
            <label htmlFor="last_name"></label>
            <input id='last_name' name='last_name' onChange={this.changeLastName}/>
            <br/>
            <label htmlFor="email"></label>
            <input type='email' id='email' name='email' onChange={this.changeEmail}/>
            <br/>
            <label htmlFor="password"></label>
            <input type='password' id='password' name='password' onChange={this.changePassword}/>
            <br/>
            <button type='submit'>submit</button>
        </form>)
    }
}

export default UserFrom;