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
        borderRadius: '10px',
        //color: '#FFFFFF',
        color: 'black',
        display: 'flex',
        padding: '16px'
    },
    subtitle: {
        fontSize: '14px',
        fontWeight: '100'
    },
    title: {
        fontSize: '22px'
    },
    iconContainer: {
        marginTop: '9px',
        paddingLeft: '2px'
    },
    icon: {
        color: `#ffffff`,
        borderRadius: '4px'
    }
});

const ListItem = 
    ({ 
        color, 
        lightColor, 
        title, 
        subtitle, 
        elevation = 0, 
        style = {}, 
        subtitleStyle = {}, 
        titleStyle={},
        iconStyle = {}
    }) => {
    const classes = useStyles();

    return (
        <Paper
            elevation={elevation}
            className={classes.list}
            style={{
                //background: `linear-gradient(to right, ${color}, ${lightColor})`,
background: '#ffffff',
                ...style
            }}
        >
            <div>
                <Typography
                    variant="body1"
                    className={classes.title}
style={{
                        ...titleStyle
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    className={classes.subtitle}
                    style={{
                        ...subtitleStyle
                    }}
                >
                    {subtitle}
                    </Typography>
            </div>
            <div
                className={classes.iconContainer}
            >
                <IconButton
                    aria-label="delete"
                    className={classes.icon}
                    style={{
                        background: `${color}`,
                        ...iconStyle
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

export default ListItem;