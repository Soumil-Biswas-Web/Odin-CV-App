import * as yup from "yup";
import { countryDialCodes } from "./countryCodes";

const optionalString = () =>
  yup.string()
    .nullable()
    .transform((value) => (value === "" ? null : value))
    .notRequired();

const schema = yup.object().shape({
  phoneExt: yup.string()
    .nullable()
    .transform(val => (val === "" ? null : val)),
    // .when('phoneNo', {
    //   is: val => val != null && val !== "",
    //   then: schema => schema.required('Region code is required if Phone Number is entered.'),
    // }),

  phoneNo: yup.string()
    .nullable()
    .transform(val => (val === "" ? null : val)),
    // .when('phoneExt', {
    //   is: val => val != null && val !== "",
    //   then: schema =>
    //     schema
    //       .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    //       .required('Phone number is required if Region code is entered.'),
    // }),

  endDate: yup.string()
    .transform(val => (val === "" ? "present" : val))
});

export async function validateData (data) {
  try {
    // console.log("data: ", data);
    await schema.validate(data, { abortEarly: false });
    console.log("Validation passed:", data);
    // Proceed with form submission (e.g. send to server)
    return true;
  } catch (err) {
    if (err.inner) {
      err.inner.forEach((validationError) => {
        console.error(validationError.path, validationError.message);
        // You can also set these errors in your component's state
      });
    }
    return false;
  }    
}