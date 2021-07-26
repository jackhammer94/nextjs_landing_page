import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link';
import Image from 'next/image'
import Logo from '../public/logo.svg'
import SignInButton from './SignInButton';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    marginLeft:"5px",
    color:"#3f51b5"
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return <AppBar  position="static" elevation={0} className={classes.appBar} color="transparent">
    <Toolbar className={classes.toolbar} >
      <Image src={Logo} width="35" height="35" alt="logo"/>
      <Typography variant="h6" noWrap className={classes.toolbarTitle}>
        Salesduke
      </Typography>
      <nav>
        <Link variant="button" color="inherit" href="#features" className={classes.link}>
          Features
        </Link>
        <Link variant="button" color="inherit" href="#pricing" className={classes.link}>
          Pricing
        </Link>
        <Link variant="button" color="inherit" href="#resources" className={classes.link}>
          Resources
        </Link>
        <SignInButton/>
      </nav>
    </Toolbar>
  </AppBar>;
}
