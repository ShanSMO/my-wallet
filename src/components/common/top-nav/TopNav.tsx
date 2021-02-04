import { IconButton } from "@material-ui/core";
import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import MenuIcon from '@material-ui/icons/Menu';

export default class TopNav extends React.Component {

    render() {
        return(
        <div>
            <AppBar position="static" color="transparent">
                <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
        );
    }

}