import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

//Start from 134 video no.
const sideDrawer = (props) => {
    let attachedClasses =[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses =[classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;