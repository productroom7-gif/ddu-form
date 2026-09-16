import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ErrorMessage } from "../../../styles/global-styles.jsx";
import { InputHolder } from "./labeled-input-styles.jsx";
import { forwardRef } from "react";

// All 27 European Union member states.
export const allowedCountries = [
  { code: "at", name: "Austria" },
  { code: "be", name: "Belgium" },
  { code: "bg", name: "Bulgaria" },
  { code: "hr", name: "Croatia" },
  { code: "cy", name: "Cyprus" },
  { code: "cz", name: "Czechia" },
  { code: "dk", name: "Denmark" },
  { code: "ee", name: "Estonia" },
  { code: "fi", name: "Finland" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "gr", name: "Greece" },
  { code: "hu", name: "Hungary" },
  { code: "ie", name: "Ireland" },
  { code: "it", name: "Italy" },
  { code: "lv", name: "Latvia" },
  { code: "lt", name: "Lithuania" },
  { code: "lu", name: "Luxembourg" },
  { code: "mt", name: "Malta" },
  { code: "nl", name: "Netherlands" },
  { code: "pl", name: "Poland" },
  { code: "pt", name: "Portugal" },
  { code: "ro", name: "Romania" },
  { code: "sk", name: "Slovakia" },
  { code: "si", name: "Slovenia" },
  { code: "es", name: "Spain" },
  { code: "se", name: "Sweden" },
];

const PhoneField = forwardRef(({ form, title = "Contact Phone Number", language = "en", ...props }, ref) => {
  const handleChange = (value, country) => {
    const selectedCountry = allowedCountries.find(c => c.code === country.countryCode);
    form.setFieldValue("phone", value);
    form.setFieldValue("phoneCountry", selectedCountry?.code || country.countryCode);
  };

  return (
    <InputHolder ref={ref}>
      <label>{title}</label>
      <PhoneInput
        country="pl"
        onlyCountries={allowedCountries.map(c => c.code)}
        preferredCountries={["pl"]}
        value={form.values.phone}
        onChange={handleChange}
        onBlur={() => form.setFieldTouched("phone", true)}
        inputProps={{
          name: "phone",
          required: true,
        }}
        enableSearch={true}
        localization={language === "pl" ? {at:"Austria",be:"Belgia",bg:"Bułgaria",hr:"Chorwacja",cy:"Cypr",cz:"Czechy",dk:"Dania",ee:"Estonia",fi:"Finlandia",fr:"Francja",de:"Niemcy",gr:"Grecja",hu:"Węgry",ie:"Irlandia",it:"Włochy",lv:"Łotwa",lt:"Litwa",lu:"Luksemburg",mt:"Malta",nl:"Holandia",pl:"Polska",pt:"Portugalia",ro:"Rumunia",sk:"Słowacja",si:"Słowenia",es:"Hiszpania",se:"Szwecja"} : undefined}
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
