import Image from 'next/image'
import Screenshot from '../public/images/screen_1.png'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}))

export default function Screenshots() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm" component="main" className={classes.heroContent} >
        <Typography  variant="h4" align="center" color="textPrimary" gutterBottom>
          Why Salesduke CRM?
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Fast, Sleek, Simple
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Paper elevation={3} >
          <Image src={Screenshot} />
        </Paper>
      </Container>
    </>
  )
}