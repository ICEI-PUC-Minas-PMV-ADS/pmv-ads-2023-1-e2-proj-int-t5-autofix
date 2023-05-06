import { FormControlLabel, Radio } from "@material-ui/core";
import React from "react";

const RadioInput = ({ value, label }) => (
  <FormControlLabel
    value={value}
    control={<Radio color="secondary" />}
    label={label}
  />
);

export default RadioInput;
