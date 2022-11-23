export const options = [
  'point guard(PG)',
  'shooting guard(SG)',
  'small forward(SF)',
  'power forward(PF)',
  'center(C)',
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
  // position: {
  //   value: '',
  //   error: false,
  //   errorMessage: '* Required'
  // }
}