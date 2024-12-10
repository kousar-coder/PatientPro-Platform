export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Shams ul Haq",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Irfan Saeed",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Abdul Qadir",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Abdul Basit",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Amjad Saeed",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Arshad Saeed",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Rabia Saleh",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Huzaifa Saleh",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Kousar Saeed",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
