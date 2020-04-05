import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function Checkboxes() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [focused, setFocused] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
     <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel className={classes.title} component="legend">Uncheked</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} onChange={handleChange}  />}
            label="Disabled"
          />
          <FormControlLabel
            control={<Checkbox color="default" inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onChange={handleChange} />}
            label="Enabled"
          />
          <FormControlLabel
            control={<Checkbox color="default" focused={focused} inputProps={{ 'aria-label': 'checkbox with focus' }} onChange={handleChange}  />}
            label="Focused"
          />
          <FormControlLabel
            control={<Checkbox color="default" inputProps={{ 'aria-label': 'checkbox hover' }} onChange={handleChange} />}
            label="Hover"
          />
          <FormControlLabel
            control={<Checkbox color="primary" inputProps={{ 'aria-label': 'checkbox pressed' }} onChange={handleChange}  />}
            label="Pressed"
          />
        </FormGroup>
        </FormControl>
        <FormControl  component="fieldset" className={classes.formControl}>
        <FormLabel className={classes.title} component="legend">Cheked</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} onChange={handleChange} />}
            label="Disabled"
          />
          <FormControlLabel
            control={<Checkbox checked color="primary"inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}  onChange={handleChange} />}
            label="Enabled"
          />
          <FormControlLabel
            control={<Checkbox checked color="primary" inputProps={{ 'aria-label': 'checkbox with focus' }} inputProps={{ 'aria-label': 'checkbox pressed' }}onChange={handleChange}  />}
            label="Focused"
          />
           <FormControlLabel
            control={<Checkbox checked color="primary" inputProps={{ 'aria-label': 'checkbox hover' }} onChange={handleChange} />}
            label="Hover"
          />
          <FormControlLabel
            control={<Checkbox checked color="primary" inputProps={{ 'aria-label': 'checkbox pressed' }} onChange={handleChange}  />}
            label="Pressed"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
