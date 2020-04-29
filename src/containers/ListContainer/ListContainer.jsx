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

const useStyles = makeStyles({
    list: {
        background: '#FFFFFF',
        padding: '16px',
        margin: '5px',
        minWidth: '200px',
        height: '150px',
        borderRadius: '3px'
    },
    subtitle1: {
    }
});

const COLORS = [
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
    const lightColor = lightenDarkenColor(COLORS[props.color1], 40);
    const darkColor = lightenDarkenColor(COLORS[props.color1], -15)

    return (
        <Paper
            elevation={0}
            className={classes.list}
            style={{
                background: `linear-gradient(90deg, ${darkColor}, ${lightColor})`,
                color: '#FFFFFF',
                display: 'flex',
                padding: '16px'
            }}
        >
            {console.log(lightColor, darkColor)}
            <div>
                <Typography
                    variant="body1"
                    style={{
                        fontSize: '22px'
                    }}
                >
                    {props.name}
                </Typography>
                <Typography
                    variant="body2"
                    style={{
                        fontSize: '14px',
                        fontWeight: '100'
                    }}
                >
                    Rev is a startup based in San Francisco and Austin building the most
                    technologically-advanced platform for freelance work. We're looking
                    for enthusiastic and ...
                    </Typography>
            </div>
            <div
                style={{
                    marginTop: '9px'
                }}
            >
                <IconButton
                    aria-label="delete"
                    style={{
                        background: `${darkColor}`,
                        color: `${lightColor}`,
                        marginRight: '10px',
                        borderRadius: '4px'
                    }}
                >
                    <SvgIcon>
                        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                    </SvgIcon>
                </IconButton>
            </div>
        </Paper>
    )
}

export default ListContainer;