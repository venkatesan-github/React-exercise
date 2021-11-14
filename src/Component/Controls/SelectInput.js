import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

const SelectInput = (props) => {

  const{name, value, onChange, label, error=null, options}= props;
  return (
    <FormControl variant="outlined" {...(error && {error:true, helperText:error})}>
      <InputLabel>{label}</InputLabel>
      <Select
        name={name}
        value={value}
        onChange={onChange}
        label={label}>
          <MenuItem value="">None</MenuItem>
          {
            options.map(item =>(
              <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
            ))
          }
        </Select>
        {error && <FormHelperText>{error}</FormHelperText>}


    </FormControl>
  );
}

export default SelectInput;
