import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300
  },
  indeterminateColor: {
    color: "#f50057"
  },
  selectAllText: {
    fontWeight: 500
  },
  selectedAll: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  },
  variant: "menu"
};

const options = [
    'point guard(PG)',
    'shooting guard(SG)',
    'small forward(SF)',
    'power forward(PF)',
    'center(C)',
];

const initialValues = {
        firstName:{
          value:'',
          error:false,
          errorMessage:'* You must enter a first name'
        },
        lastName:{
          value:'',
          error:false,
          errorMessage:'* You must enter last name'
        },
        height:{
          value:'',
          error:false,
          errorMessage:'* You must enter hight'
        }
}

export { useStyles, MenuProps, options, initialValues };