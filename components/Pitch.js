import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from './Link';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Pitch() {
  const classes = useStyles();

  return <div className={classes.heroContent}>
    <Container maxWidth="sm">
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Grow your business with the world's simplest CRM
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Are you looking for a CRM solution that is cost&#8209;effective, easy to setup and makes customer relationship management a breeze?
        we've got you covered.
      </Typography>
      <div className={classes.heroButtons}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">
              Sign up
            </Button>
          </Grid>
          <Grid item>
            <Link variant="button" color="inherit" href="#pricing" className={classes.link}>
              <Button variant="outlined" color="primary">
                View plans
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  </div>;
}