import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';

const features = [{
  title: "Lead Management",
  description: "Track potential customers"
},
{
  title: "Account Management",
  description: "Manage your accounts"
},
{
  title: "Contact Management",
  description: "Manage your business contacts"
},
{
  title: "Deal Management",
  description: "Track your ongoing deals"
},
{
  title: "Activity Management",
  description: "Schedule meetings, create reminders, take notes"
},
{
  title: "Case Management",
  description: "Track cases raised by customers"
}];

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
}));

export default function Features() {
  const classes = useStyles();

  return <Box><Container className={classes.cardGrid} maxWidth="md" id="features">
    <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
      Features
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" component="p">
      Essential for customer success
    </Typography>
  </Container>
    <Container  maxWidth="md" component="main">
      <Grid container spacing={4}>
        {features.map((feature) => (
          <Grid item key={feature} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title" />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {feature.title}
                </Typography>
                <Typography>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
    ;
}