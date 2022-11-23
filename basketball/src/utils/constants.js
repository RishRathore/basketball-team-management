export const options = [
  'Point guard(PG)',
  'Shooting guard(SG)',
  'Small forward(SF)',
  'Power forward(PF)',
  'Center(C)',
];

export const initialValues = {
  firstName: {
    value: '',
    error: false,
    errorMessage: '* Required'
  },
  lastName: {
    value: '',
    error: false,
    errorMessage: '* Required'
  },
  height: {
    value: '',
    error: false,
    errorMessage: '* Required'
  },
  skills: {
    value: [],
    error: false,
    errorMessage: '* Required'
  }
}