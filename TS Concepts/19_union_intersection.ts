// Union |
// intersection &

type StringOrNumber = string | number | boolean; //union

interface BusinessPartner {
  name: string;
}
interface ContactDetails {
  email: string;
  phone: string;
}

type BusinessContact = BusinessPartner & ContactDetails
const a:BusinessContact = {
  name: "AP",
  email: "",
  phone: ""
}