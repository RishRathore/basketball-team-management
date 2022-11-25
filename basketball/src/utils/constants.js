export const options = [
  "Point guard(PG)",
  "Shooting guard(SG)",
  "Small forward(SF)",
  "Power forward(PF)",
  "Center(C)",
];

export const initialValues = {
  firstName: {
    value: "",
    error: false,
    errorMessage: "* Required",
  },
  lastName: {
    value: "",
    error: false,
    errorMessage: "* Required",
  },
  height: {
    value: "",
    error: false,
    errorMessage: "* Required",
  },
  skills: {
    value: [],
    error: false,
    errorMessage: "* Required",
  },
};

export const roleInitialValue = [
  { index: 0, id: null, error: false, role: null },
  { index: 1, id: null, error: false, role: null },
  { index: 2, id: null, error: false, role: null },
  { index: 3, id: null, error: false, role: null },
  { index: 4, id: null, error: false, role: null },
];  