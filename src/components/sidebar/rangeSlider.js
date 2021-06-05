import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './Side.css'


const useStyles = makeStyles({
  root: {
    width: 250,
  },
});

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 10000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
      </Typography>
        <div className="price__input">
            <input className="price__form" type="text" name="" placeholder="From"></input>
            <input className="price__form" type="text" name="" placeholder="To"></input>
        </div>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}