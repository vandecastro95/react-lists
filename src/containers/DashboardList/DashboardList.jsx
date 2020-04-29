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
        background: '#1A1D22',
        padding: '16px',
    },
    subtitle1: {
    }
});

const Lists = [
    {
        name: 'Favorite Movies',
        color: [0],
        lists: [
            {
                title: 'Parasite',
                note: 'Very good korean movie',
            },
            {
                title: 'Snow Piercer'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [1],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [2],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [3],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [4],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [5],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [6],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [7],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [8],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [9],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [10],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [11],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [12],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [13],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
    {
        name: 'Favorite Songs',
        color: [14],
        lists: [
            {
                title: 'Money',
                note: 'The drums are insane',
            },
            {
                title: 'The Strokes'
            }
        ]
    },
]

const DashboardList = () => {
    const classes = useStyles();
    return (
        <Paper elevation={6} className={classes.dashboardList}>
            <Grid container spacing={4}>
                <Grid item xs={12} style={{
                    background: 'linear-gradient(#343b42, #1A1D22)',
                    
                }}>
                    <Typography
                        variant="subtitle1"
                        gutterBottom
                        style={{
                            color: '#FFFFFF',
                        }}
                    >
                        My Lists
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {
                            Lists.map((list, index) => <Grid item xs={12} sm={10} md={6} lg={6} xl={6} key={index}>
                                <ListContainer name={list.name} color1={list.color[0]} />
                            </Grid>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default DashboardList;