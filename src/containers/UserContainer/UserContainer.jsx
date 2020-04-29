import React from 'react';
import {
    Grid,
    Paper,
    Typography
} from '@material-ui/core';
import ListItem from '../../components/ListItem';

const UserContainer = () => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={7}>
                <ListItem
                    title="Hey, Van de Castro"
                    subtitle="You might be familiar with normalize.css, a collection of HTML element and attribute style-normalizations."
                    color={'#78909c'}
                    lightColor={'#a7c0cd'}
                    elevation={21}
                />
            </Grid>
            <Grid item xs={5}>
                <ListItem
                    title=""
                    subtitle=""
                    color={'#78909c'}
                    lightColor={'#a7c0cd'}
                    elevation={21}
                    style={{
                        border: '1px solid #A9D5DE',
                        background: '#F8FFFF',
                        color: '#548EA0'
                    }}
                    subtitleStyle={{
                        border: '1px solid red',
                        height: '100%',
                        width: '100%',
                        margin: 'auto',
                        color: '#548EA0',
                        fontWeight: '500'
                    }}
                    iconStyle={{
                        display: 'none'
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default UserContainer;