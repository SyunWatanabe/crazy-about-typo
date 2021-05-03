import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TagFacesIcon from '@material-ui/icons/TagFaces';

type Props = {
  typoText: string,
  correctText: string
}

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    display: 'inline-block',
    margin: 8,
  },
  prefix: {
    fontSize: 12,
    marginRight: 8,
    color: '#3f51b5',
  },
});

export default function SimpleCard({typoText, correctText}: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <span className={classes.prefix}>誤</span>
        {typoText}
        <br />
        <span className={classes.prefix}>訂</span>
        {correctText}
      </CardContent>
      <CardActions>
        <TagFacesIcon color="action" />
        <TagFacesIcon color="warning" />
        <ThumbUpIcon color="action" />
        <ThumbUpIcon color="primary" />
        <FavoriteBorderIcon color="action" />
        <FavoriteIcon color="secondary" />
        <Button size="small">Detail</Button>
      </CardActions>
    </Card>
  );
}
