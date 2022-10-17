import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { onSave } from "../reducer/person";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeText = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="mt-[150px] text-center">
      <div className="m-4">
        <TextField
          className="w-80"
          id="outlined-basic"
          label="Client Id"
          variant="outlined"
          onChange={changeText}
          name="id"
        />
      </div>
      <div className="m-4">
        <TextField
          className="w-80"
          id="outlined-basic"
          label="Client Age"
          variant="outlined"
          onChange={changeText}
          name="age"
        />
      </div>
      <div className="m-4">
        <TextField
          className="w-80"
          id="outlined-basic"
          label="Meeting Date"
          variant="outlined"
          onChange={changeText}
          name="date"
        />
      </div>
      <Button
        onClick={() => {
          dispatch(onSave(data));
          navigate("/home");
        }}
        variant="contained"
      >
        COMMENCE ACTIVITY
      </Button>
    </div>
  );
};

export default Form;
