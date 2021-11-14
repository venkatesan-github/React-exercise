import { Grid } from "@material-ui/core";
import { useForm, Form } from "../Component/useForm";
import Input from "../Component/Controls/Input";
import RadioGroupInput from "../Component/Controls/RadioGroupInput";
import SelectInput from "../Component/Controls/SelectInput";
import CheckboxInput from "../Component/Controls/CheckboxInput";
import DatePickerInput from "../Component/Controls/DatePickerInput";
import ButtonInput from "../Component/Controls/ButtonInput";
import * as EmployeeService from "../Services/EmployeeServices";

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "others", title: "Others" },
];

const EmployeeForm = () => {
  const validate = () => {
    let temp = {};
    temp.fullName = values.fullName ? "" : "This field is required.";
    temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Email is not valid.";
    temp.mobile =
      values.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    temp.departmentId =
      values.departmentId.length !== 0 ? "" : "This field is required";
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, resetForm, handleInputChange } =
    useForm(initialFValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) EmployeeService.insertEmployee(values);

    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RadioGroupInput
            name="gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
            label="Gender"
          />
          <SelectInput
            name="departmentId"
            value={values.departmentId}
            onChange={handleInputChange}
            label="Department"
            options={EmployeeService.Departments()}
            error={errors.departmentId}
          />
          <DatePickerInput
            name="hireDate"
            value={values.hireDate}
            label="Hire Date"
            onChange={handleInputChange}
          />
          <CheckboxInput
            name="isPermanent"
            value={values.isPermanent}
            label="Permanent Employee"
            onChange={handleInputChange}
          />
          <div>
            <ButtonInput type="submit" text="Submit" />
            <ButtonInput color="default" text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
