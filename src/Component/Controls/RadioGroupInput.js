import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React from "react";

const RadioGroupInput = (props) => {
  const { name, value, onChange, label, items } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        row
        name={name}
        value={value}
        onChange={onChange}
        items={items}
      >
        {items.map(item => (
          <FormControlLabel
            key={Math.random().toString()}
            value={item.id}
            label={item.title}
            control={<Radio />}
          ></FormControlLabel>
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupInput;
