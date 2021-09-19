import { Fragment } from "react";
 
import HeaderCartButton from "./HeaderCartButton";
import mealsimage from '../../assets/tablemeals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.Header}>
            <h1>React meals</h1>
            <HeaderCartButton>Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimage} alt="A table full of delecious food!"></img>
        </div>
    </Fragment>
};

export default Header;