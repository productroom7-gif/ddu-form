import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ErrorMessage } from "../../../styles/global-styles.jsx";
import { InputHolder } from "./labeled-input-styles.jsx";
import { forwardRef } from "react";

export const allowedCountries = [
  { code: "pl", name: "Poland", maxLength: 9 },
  { code: "us", name: "USA", maxLength: 10 },
  { code: "de", name: "Germany", maxLength: 11 },
];

const PhoneField = forwardRef(({ form, ...props }, ref) => {
  const handleChange = (value, country) => {
    const selectedCountry = allowedCountries.find(c => c.code === country.countryCode);
    form.setFieldValue("phone", value);
    form.setFieldValue("phoneCountry", selectedCountry?.code || country.countryCode);
  };

  return (
    <InputHolder ref={ref}>
      <label>Contact Phone Number</label>
      <PhoneInput
        country="pl"
        onlyCountries={allowedCountries.map(c => c.code)}
        value={form.values.phone}
        onChange={handleChange}
        onBlur={() => form.setFieldTouched("phone", true)}
        inputProps={{
          name: "phone",
          required: true,
        }}
        enableSearch={true}
        disableSearchIcon={false}
        dropdownStyle={{ zIndex: 9999 }}
        {...props}
      />
      {form.touched.phone && form.errors.phone && (
        <ErrorMessage>{form.errors.phone}</ErrorMessage>
      )}
    </InputHolder>
  );
});

export default PhoneField;
