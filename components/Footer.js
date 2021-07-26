import Copyright from '../components/Copyright';
import Container from '@material-ui/core/Container';
import Link from '../components/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const footers = [
  {
    title: 'Contact Us',
    description: ['sales@salesduke.com', 'support@salesduke.com', 'Schedule a demo'],
  },
  {
    title: 'Features',
    description: ['Lead Management', 'Account Management', 'Contact Management', 'Deal Management', 'Activity Management', 'Case Management'],
  },
  {
    title: 'Resources',
    description: ['What is CRM?', 'Why Salesduke?', 'Types of CRM'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return <Container maxWidth="md" component="footer" className={classes.footer}>
    <Grid container spacing={4} justify="space-evenly">
      {footers.map((footer) => (
        <Grid item xs={6} sm={3} key={footer.title}>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {footer.title}
          </Typography>
          <ul>
            {footer.description.map((item) => (
              <li key={item}>
                <Link href="#" variant="subtitle1" color="textSecondary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      ))}
    </Grid>
    <Box mt={5}>
      <Copyright />
    </Box>
  </Container>;
}