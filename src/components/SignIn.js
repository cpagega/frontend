import React, {useState} from 'react';
import  './SignIn.css';

const SignIn = (props) => {

    const [userData, setUserData] = useState({
        email:"",
        password:""
    });

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
        e.preventDefault();
        props.onSubmitUser(userData);

    } 

    return ( 

        <div className="signupFrm">
            <form onSubmit={handleSubmit} action="" className="form">
            <h1 className="title">Sign in</h1>

            <div className="inputContainer">
                <input type="email" onChange={setEmail} className="input" placeholder="a"/>
                <label for="" className="label">Email</label>
            </div>

            <div className="inputContainer">
                <input type="password" onChange={setPassword} className="input" placeholder="a"/>
                <label for="" className="label">Password</label>
            </div>

            <input type="submit" className="submitBtn" value="Sign in"/>
            </form>
        </div>
     );
}

export default SignIn;