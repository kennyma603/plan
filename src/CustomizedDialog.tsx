import * as React from "react";
import { doc, setDoc, deleteField, updateDoc } from "firebase/firestore";
import { database, signInWithGoogle } from "./firebase";

import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { styled } from "@mui/material/styles";
import { CustomizedDialogTitle } from "./CustomizedDialogTitle";
import Dialog from "@mui/material/Dialog";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { ContentType } from "./enums";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

export const CustomizedDialog = ({
  isOpen,
  handleClose,
  selectedDate,
  type,
  user
}) => {
  const [value, setValue] = React.useState("");

  const date = new Date(selectedDate);
  const formattedMonth = `${date.getFullYear()}-${date.getMonth() + 1}`;
  const formattedDate = `${formattedMonth}-${date.getDate()}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setValue(value);
  };

  const handleSave = () => {
    const docRef = doc(database, user.uid, formattedMonth);

    if (value === "RESET") {
      updateDoc(docRef, { [formattedDate]: deleteField() });
    } else {
      setDoc(docRef, { [formattedDate]: value }, { merge: true });
    }

    handleClose();
  };

  return (
    <div>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        fullWidth={true}
      >
        {user && (
          <>
            <DialogContent dividers>
              <CustomizedDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                {formattedDate}
              </CustomizedDialogTitle>

              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={value}
                  onChange={handleChange}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value={ContentType.InOffice}
                    control={<Radio />}
                    label="In Office (or Plan to come to office)"
                    disabled={type === ContentType.InOffice}
                  />
                  <FormControlLabel
                    value={ContentType.Exclude}
                    control={<Radio />}
                    label="Exclude (PTO/Sickday/Stat Holiday)"
                    disabled={type === ContentType.Exclude}
                  />
                  {type && (
                    <FormControlLabel
                      value={"RESET"}
                      control={<Radio />}
                      label={`Remove ${type}`}
                    />
                  )}
                </RadioGroup>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleSave}>
                Save changes, {value}
              </Button>
            </DialogActions>
          </>
        )}

        {!user && (
          <>
            <DialogContent dividers>
              <CustomizedDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
              >
                Please login first
              </CustomizedDialogTitle>
              <Button variant="outlined" onClick={signInWithGoogle}>
                Google Login
              </Button>
            </DialogContent>
          </>
        )}
      </BootstrapDialog>
    </div>
  );
};
