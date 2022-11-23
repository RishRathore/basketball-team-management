import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const NotificationDialog = ({ open, onClose, message }) => (
  <Dialog onClose={onClose} open={open}>
    <DialogTitle>{message}</DialogTitle>
  </Dialog>
);

export default NotificationDialog;
