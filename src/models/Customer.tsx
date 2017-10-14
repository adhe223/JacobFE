export default interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  companyName: string | null;
  streetAddress: string;
  streetAddress2: string | null;
  city: string;
  state: string;
  zip: string;
  phoneNumber: string;
}