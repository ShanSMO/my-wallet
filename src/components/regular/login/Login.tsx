import { connect } from 'react-redux';
import './Login.css';
import { Button, TextField } from "@material-ui/core";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {login} from '../../../store/actions/oauth-actions';

let loginSt = {
    userName: '',
    password: ''
};

const mapDispatchToProps = (dispatch: any) =>{
    return {
        login: dispatch(login({
            id: 2,
            hasAuthenticated: true
        }))
    }
}

function Login() {
    const history = useHistory();
    const [loginState, setLoginFormState] = useState({...loginSt});

    const HandleLogin = () => {
        if (loginState.userName === 's' && loginState.password === 'sss') {
            setLoginFormState({...loginSt});
            history.push(`/aa/dashboard`);
        }
    }

    return (
        <form>
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h3>Welcome to My Wallet Portal</h3>
                    <h2>Internal User Login</h2>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <div>
                        <TextField size="small" type="text" label="User Name/Email address"
                            onChange={(event) => {
                                setLoginFormState({ ...loginState, userName: event.target.value });
                            }}
                            value={loginState.userName}
                            variant="outlined"
                            name="username" />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <TextField size="small" type="password" label="Password"
                            onChange={(event) => {
                                setLoginFormState({ ...loginState, password: event.target.value });
                            }}
                            variant="outlined" name="password" />
                    </div>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <Button color="primary" variant="contained" component={Link} to="/register">Sign Up</Button>&nbsp;
                <Button color="secondary" variant="contained" onClick={HandleLogin}>Login</Button>
                </div>
            </div>
        </form>
    );
}

export default connect(
    null,
    mapDispatchToProps)
    (Login);