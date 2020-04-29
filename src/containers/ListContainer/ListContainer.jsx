import React from 'react';
import {
    Grid,
    Paper,
    Typography,
    Card
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

import Listitem from '../../components/ListItem';
import List from './List.jsx'

const useStyles = makeStyles({
    list: {
        background: '#FFFFFF',
        padding: '16px',
        margin: '5px',
        minWidth: '200px',
        height: '150px',
        borderRadius: '10px'
    },
    subtitle1: {
    }
});

const COLORS = [
    '#78909c',
    '#FF5252',
    '#FF80AB',
    '#E040FB',
    '#7C4DFF',
    '#536DFE',
    '#F4511E',
    '#C51162',
    '#8E24AA',
    '#546E7A',
    '#2E7D32',
    '#558B2F',
    '#827717',
    '#E65100',
    '#F4511E',
    '#5D4037',
    '#78909C'
]

const BASE_LINE = 5;

function lightenDarkenColor(col, amt) {
    var usePound = false;

    if (col.charAt(0) === '#') {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

const ListContainer = (props) => {
    const classes = useStyles();
    //const lightColor = lightenDarkenColor(COLORS[props.color[0]], 50);
    //const darkColor = lightenDarkenColor(COLORS[props.color1], -15)

    return (
        <Grid container spacing={2}>
            {console.log(List)}
            {
                List.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={10} md={6} lg={4} xl={4} key={index}>
                            <Listitem
                                title={item.name}
                                subtitle={item.subtitle ? item.subtitle : 'You might be familiar with normalize.css, a collection of HTML element and attribute style-normalizations.'}
                                color={COLORS[item.color[0]]}
                                lightColor={lightenDarkenColor(COLORS[item.color[0]], 50)}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default ListContainer;