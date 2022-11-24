import Snackbar from "@mui/material/Snackbar"

const position = { vertical: 'top', horizontal: 'center' }

const Notifier = ({ msg, open, handleClose }) => (
  <Snackbar
    anchorOrigin={position}
    open={open}
    onClose={handleClose}
    message={msg}
    key={'top center'}
    autoHideDuration={3000}
  />
)

export default Notifier
