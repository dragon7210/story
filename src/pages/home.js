import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import { X } from "../constant";
import { useDispatch } from "react-redux";
import { addMilestone } from "../reducer/milestone";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const [textMile, setTextMile] = useState("");
  const handleMove = (e, row, col) => {
    // console.log(row, col);
  };
  const changeText = (e) => {
    setTextMile(e.target.value);
  };
  return (
    <>
      <div className="float-right p-5">
        <TextField
          id="outlined-basic"
          label="Milestone"
          variant="outlined"
          onChange={changeText}
          name="id"
        />
        <Button
          variant="contained"
          onClick={() => {
            dispatch(addMilestone(textMile));
          }}
        >
          Add
        </Button>
      </div>
      <div className="w-full p-5 h-[50vh]">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>18-24yrs</TableCell>
              <TableCell>25-29yrs</TableCell>
              <TableCell>30-34yrs</TableCell>
              <TableCell>35-39yrs</TableCell>
              <TableCell>40-44yrs</TableCell>
              <TableCell>45-49yrs</TableCell>
              <TableCell>50-54yrs</TableCell>
              <TableCell>55-59yrs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {X.map((element, index) => (
              <TableRow key={index}>
                <TableCell>{element}</TableCell>
                <TableCell
                  onMouseOver={(e) => handleMove(e, index, 1)}
                ></TableCell>
                <TableCell
                  onMouseOver={(e) => handleMove(e, index, 2)}
                ></TableCell>
                <TableCell
                  onMouseOver={(e) => handleMove(e, index, 3)}
                ></TableCell>
                <TableCell
                  onMouseOver={(e) => handleMove(e, index, 4)}
                ></TableCell>
                <TableCell
                  onMouseOver={(e) => handleMove(e, index, 5)}
                ></TableCell>
                <TableCell
                  onMouseOver={(e) => handleMove(e, index, 6)}
                ></TableCell>
                <TableCell
                  onMouseOver={(e) => handleMove(e, index, 7)}
                ></TableCell>
                <TableCell
                  onMouseOver={(e) => handleMove(e, index, 8)}
                ></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Home;
