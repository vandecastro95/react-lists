import React from 'react';
import {
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './header.css'
import ViewListIcon from '@material-ui/icons/ViewList';

const useStyles = makeStyles({
    root: {
    },
    header: {
        color: '#1A1D22',
        //background: '#171A21',
        background: '#ffffff',
        alignItems: 'center',
        display: 'flex',
    }
});

const Header = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.header}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: '20px'
                    }}
                >

                    <ViewListIcon
                        style={{
                            color: '#DEEAED',
                            fontSize: '50px'
                        }}
                    />
                    <Typography
                        style={{
                            color: '#C5C3C0',
                        }}
                        variant="h4"
                        component="h4"
                    >
                        Lists
                </Typography>
                </div>
            </Grid>
        </Grid>
    )

}
export default Header;