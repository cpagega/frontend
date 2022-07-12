import React, {useState} from 'react';
import  './SignUp.css';

function SignUp(props) {

    const [userData, setUserData] = useState({
        name:"",
        email:"",
        password:""
    });

    const setUserName = e => {
        setUserData(previousState => {
            return{...previousState, 
                    name: e.target.value
                   }
        });
    }

    const setEmail = e => {
        setUserData(previousState => {
            return{...previousState,
                    email: e.target.value
                }
        });
    }
    
    const setPassword = e => {
        setUserData(previousState => {
            return{...previousState, 
                    password: e.target.value
                   }
        });
    }

    const handleSubmit = (e) => {
        props.onSubmit({params:setUserData});
        setUserData(previousState => {
            return{...previousState, 
                    name: "",
                    email: "",
                    password: ""
                };
        });
    } 

    return ( 
        /*<div className = "sign-in">
            <form className="form">
            <input type='email' className="input" placeholder="email..."/>
            <input type='password' className="input" placeholder="password..." name ='password' />
            <button type='submit' className="login-button">Sign In</button>
            </form>
        </div>*/
        <div className="signupForm">
            <form onSubmit={handleSubmit} action="" className="form">
            <h1 className="title">Sign up</h1>

            <div className="inputContainer">
                <input type="text" onChange={setUserName} className="input" placeholder="a"/>
                <label for="" className="label">Name</label>
            </div>

            <div className="inputContainer">
                <input type="text" onChange={setEmail} className="input" placeholder="a"/>
                <label for="" className="label">Email</label>
            </div>


            <div className="inputContainer">
                <input type="text" onChange={setPassword}  className="input" placeholder="a"/>
                <label for="" className="label">Password</label>
            </div>

            <div className="inputContainer">
                <input type="text" onChange={setPassword}  className="input" placeholder="a"/>
                <label for="" className="label">Confirm Password</label>
            </div>

            <input type="submit" className="submitBtn" value="Sign up"/>
            </form>
        </div>
     );
}

export default SignUp;