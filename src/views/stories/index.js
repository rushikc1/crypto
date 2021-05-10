import React, { useEffect, useState } from 'react';
import {
  // Container,
  // Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
// import Stories from 'react-insta-stories';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { IsLocalhost } from 'src/utils/common'
import Image from './Image'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const Story = () => {
  const classes = useStyles();

  const [link, setLinks] = useState({
    links: [],
    content: null,

  });
  const [id, setID] = useState({
    insta_id: ''
  });


  
  useEffect(() => {
    // setAppState({ loading: true });
    const loadLinks = async function () {

      var apiUrl;
      if (IsLocalhost()) {
        apiUrl = 'http://localhost:3100/api/instagram/public';
  
      }
      else {
        apiUrl = 'https://limitless-oasis-69420.herokuapp.com/api/instagram/public';
      }
  
      await axios.get(apiUrl,{params: {
        name: id.insta_id
      }}).then((repos) => {
        const allRepos = repos.data;
        setLinks({ links: allRepos });
        console.log(allRepos);
        console.log('innnn')
      });
    }

    if (link.content !== null)
      loadLinks()

  }, [link.links.length, link.content, id.insta_id]);


  const setInstaID = (name) => {
    let id1;
    if (id.insta_id.includes(name)) {
      id1 = id.insta_id.replace(name, '')
    }
    else {

      id1 = name + id.insta_id
    }
    setID({ insta_id: id1 })
    console.log(id.insta_id);
  }
  return (
    <Page
      className={classes.root}
      title="Stories"
    >
      {
        link.links.length === 0 ?
          <div>
            <div>

              <center>
                <Button variant="contained" onClick={() => setInstaID('indian')}
                  color={id.insta_id.includes('indian') ? 'primary' : 'default'}
                  className={classes.margin}>
                  Indian
              </Button>
                <Button variant="contained" onClick={() => setInstaID('bollywood')}
                  color={id.insta_id.includes('bollywood') ? 'primary' : 'default'}
                  className={classes.margin}>
                  Bollywood
              </Button>
                <Button variant="contained" onClick={() => setInstaID('other')}
                  color={id.insta_id.includes('other') ? 'primary' : 'default'}
                  className={classes.margin}>
                  Others
              </Button>
              </center>


            </div>

            <div>
              <center>
                <Button variant="contained" color="primary" onClick={() => { setLinks({ links: [], content: true }) }} className={classes.margin}>
                  Send
              </Button>
              </center>
            </div>
          </div>
          : <React.Fragment></React.Fragment>
      }


      {
        link.links.length > 0 ?
          // <Stories
          //   stories={link.links}
          //   defaultInterval={10000}
          //   width={393}
          //   height={750}

          // />
          <Image
            stories={link.links}
          />
          
          : <React.Fragment></React.Fragment>
      }
    </Page>
  )
};

export default Story;
