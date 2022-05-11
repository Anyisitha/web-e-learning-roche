import { Fragment } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <Fragment>
            <span>Hola soy el registro!</span>
            <Link to="/">Go to home!</Link>
        </Fragment>
    );
}

export default Register;