import React from 'react';
import {
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dashboardList: {
        height: '100vh',
        background: '#FFFFFF',
        padding: '16px',
        borderRadius: '33px'
    },
    subtitle1: {
    }
});

const ListItem = () => {
    const classes = useStyles();
    return (
        <Paper elevation={6} className={classes.dashboardList}>
            <Grid container spacing={4}>
                <Grid item xs={12} style={{ background: '#F0EFEF', }}>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{
                            color: '#000103',
                        }}
                    >
                        My Lists
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ListItem;