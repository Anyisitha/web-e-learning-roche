import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Fragment>
            <span>Hola soy el home!</span>
            <Link to="/register">Go to register!</Link>
        </Fragment>
    );
}

export default Home;