import './Register.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => {
    return { articles: state.articles };
};

function Register() {
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h3>Welcome to My Wallet Portal</h3>
                <h2>Create an Free account</h2>
            </div>

            <div style={{ marginTop: '15px' }}>
                <Button color="secondary" variant="contained" component={Link} to="/login">Login</Button>
            </div>
        </div>
    );
}

export default connect(
    mapStateToProps,
    null
)(Register);