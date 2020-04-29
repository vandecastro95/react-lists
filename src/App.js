import React from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Dashboard from './pages/Dashboard';
import Header from './containers/Header';

const useStyles = makeStyles({
    root: {
        //background: 'linear-gradient(120deg, #20242A, #171A21)',
        background: '#EDF9F5',
        width: '100%',
        height: '100vh',
        overflowX: 'hidden'
    },
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Dashboard />
        </div>
    );
}

export default App;
