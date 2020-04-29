import React from 'react';
import {
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListContainer from '../ListContainer';

const useStyles = makeStyles({
    dashboardList: {
        height: '100%',
        //background: '#1A1D22',
        background: '#F8F8F8',
        padding: '16px',
    },
    subtitle1: {
    }
});

const DashboardList = () => {
    const classes = useStyles();
    return (
        <Paper elevation={6} className={classes.dashboardList}>
            <Grid container spacing={1}>
                <Grid item xs={12} style={{
                    //background: 'linear-gradient(#343b42, #1A1D22)',
                }}>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{
                            //color: '#FFFFFF',
                            color: '#C5C3C0',
                        }}
                    >
                        My Lists
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                        <ListContainer />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DashboardList;