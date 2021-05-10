import React from 'react';
import {
    // Container,
    // Grid,
    makeStyles
} from '@material-ui/core';
// import Page from 'src/components/Page';
// import Stories from 'react-insta-stories';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { IsLocalhost } from 'src/utils/common'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    marginError: {
        margin: theme.spacing(1),
        color: '#d65151'
    },
    margin: {
        margin: theme.spacing(1),
        color: 'Green'
    },
}));


const Image = ({ stories }) => {
    // console.log(stories[1], 'lul')
    const classes = useStyles();
    var apiUrl;
    if (IsLocalhost()) {
      apiUrl = 'http://localhost:3100/api/instagram/public/';

    }
    else {
      apiUrl = 'https://limitless-oasis-69420.herokuapp.com/api/instagram/public/';
    }

    const ImgBlackList = (val) => {
        axios.get(apiUrl+'ImgBlackList',{params: {
            val: val
          }})
    }
    const ImgWhiteList = (val) => {
        axios.get(apiUrl+'ImgWhiteList',{params: {
            val: val
          }})
    }

    return (<React.Fragment>
        {
            stories.map((val, ind) => {
                return (
                    <React.Fragment key={ind}>
                        <img width="393" alt='' src={val} ></img>
                        <center>
                            <Button variant="contained"
                                onClick ={ () => {ImgWhiteList(val)}}
                                color='default'
                                className={classes.margin}>
                                <CheckCircleIcon />
                            </Button>
                            <Button variant="contained"
                                onClick ={ () => {ImgBlackList(val)}}
                                color='default'
                                className={classes.marginError}>
                                <DeleteIcon />
                            </Button>
                        </center>
                    </React.Fragment>
                )
            })
        }
    </React.Fragment>)
}

export default Image;
