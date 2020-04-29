import React from 'react';
import {
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DashboardList from '../containers/DashboardList';

const useStyles = makeStyles({
    dashboardHeader: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    },
});

const Dashboard = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={4}
            className={classes.dashboardHeader}>
            <Grid item xs={12} sm={12} md={11} lg={10} xl={8}>
                <DashboardList />
            </Grid>
        </Grid>
    )

}
export default Dashboard;