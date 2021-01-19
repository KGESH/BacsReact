import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from "@material-ui/core/styles";

const NavigationTheme = () => {

    const useStyles = makeStyles(theme =>
        ({
            root: {
                height: "100%",
                background: theme.palette.background.default
            }
        })
    );

    const whiteTheme = createMuiTheme({
        palette: {
            primary: red
        }
    });

    const classes = useStyles();
    const myTheme = useState(whiteTheme);

    


}