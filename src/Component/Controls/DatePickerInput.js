import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";

const DatePickerInput = (props) => {
  const { name, value, label, onChange } = props;

  const ConvertToDefEventPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MM/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(ConvertToDefEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerInput;
