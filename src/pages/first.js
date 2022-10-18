import { TextField } from "@mui/material";
import { X1, X2, X } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { addMilestone } from "../reducer/milestone";
import { addChallenge } from "../reducer/challenge";
import { addFirstTop } from "../reducer/firstTop";
import { addFirstBottom } from "../reducer/firstBottom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";

function getX(i) {
  if (i < 25) {
    return 1;
  } else {
    return parseInt((i - 25) / 5) + 2;
  }
}
const First = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [textMile, setTextMile] = useState("");
  const [textChal, setTextChal] = useState("");
  const [drag, setDrag] = useState(false);
  const [dragBottom, setDragBottom] = useState(false);
  const [draggedItem, setDraggedItem] = useState({ row: -1, col: -1 });
  const [draggedItemBottom, setDraggedItemBottom] = useState({
    row: -1,
    col: -1,
  });
  const [components, setComponents] = useState([]);
  const [componentsBottom, setComponentsBottom] = useState([]);
  const [name, setName] = useState("");
  const [nameBottom, setNameBottom] = useState("");

  const milestones = useSelector((state) => state.Milestone).value;
  const chalstones = useSelector((state) => state.Challenge).value;
  const { age } = useSelector((state) => state.Person);

  const temp = X.slice(0, getX(parseInt(age)));

  const handelMoveTop = (e, row, col) => {
    if (drag) {
      const newComponents = components.map((i) => i);
      if (!newComponents[row]) {
        newComponents[row] = [];
      }
      if (!newComponents[row][col]) {
        newComponents[row][col] = [];
      }
      newComponents[row][col].push(
        <button
          className="mileButton"
          draggable="true"
          onDragStart={(e) => handleDragStart(e, row, col, name)}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          key={e}
        >
          {name}
        </button>
      );
      if (draggedItem.row !== -1 && draggedItem.col !== -1) {
        newComponents[draggedItem.row][draggedItem.col].splice(0, 1);
      }
      dispatch(addFirstTop({ row, col, name }));
      setDraggedItem({ row: -1, col: -1 });
      setName("");
      setComponents(newComponents);
      setDrag(false);
    }
  };

  const changeMile = (e) => {
    setTextMile(e.target.value);
  };
  const changeChal = (e) => {
    setTextChal(e.target.value);
  };

  const handleDragStart = (event, row = -1, col = -1, name) => {
    if (row !== -1 && col !== -1) {
      setDraggedItem({ row: row, col: col });
    }
    event.target.style.opacity = 0.5;
    event.dataTransfer.effectAllowed = "move";
    setName(name);
    setDrag(true);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDragEnd = (event) => {
    event.target.style.opacity = 1;
    setTimeout(() => {
      setName("");
      setDraggedItem({ row: -1, col: -1 });
      setDrag(false);
    }, 500);
  };

  const handleMoveBottom = (e, row, col) => {
    if (dragBottom) {
      const newComponents = componentsBottom.map((i) => i);
      if (!newComponents[row]) {
        newComponents[row] = [];
      }
      if (!newComponents[row][col]) {
        newComponents[row][col] = [];
      }
      newComponents[row][col].push(
        <button
          className="chalButton"
          draggable="true"
          onDragStart={(e) => handleDragStartBottom(e, row, col, name)}
          onDragOver={handleDragOverBottom}
          onDragEnd={handleDragEndBottom}
          key={e}
        >
          {nameBottom}
        </button>
      );
      if (draggedItemBottom.row !== -1 && draggedItemBottom.col !== -1) {
        newComponents[draggedItemBottom.row][draggedItemBottom.col].splice(
          0,
          1
        );
      }
      setDraggedItemBottom({ row: -1, col: -1 });
      dispatch(addFirstBottom({ row, col, nameBottom }));
      setNameBottom("");
      setComponentsBottom(newComponents);
      setDragBottom(false);
    }
  };
  const handleDragStartBottom = (event, row = -1, col = -1, name) => {
    if (row !== -1 && col !== -1) {
      setDraggedItemBottom({ row: row, col: col });
    }
    event.target.style.opacity = 0.5;
    event.dataTransfer.effectAllowed = "move";
    setNameBottom(name);
    setDragBottom(true);
  };

  const handleDragOverBottom = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDragEndBottom = (event) => {
    event.target.style.opacity = 1;
    setTimeout(() => {
      setNameBottom("");
      setDraggedItemBottom({ row: -1, col: -1 });
      setDragBottom(false);
    }, 500);
  };

  return (
    <>
      <div className="top">
        <div className="float-right p-5">
          <TextField
            id="outlined-basic"
            label="Milestone"
            variant="outlined"
            onChange={changeMile}
            name="id"
          />
          <button
            className="addButton"
            onClick={() => {
              dispatch(addMilestone(textMile));
            }}
          >
            Add
          </button>
        </div>
        <div className="float-right p-5 w-[20%]">
          {milestones &&
            milestones.map((element, index) => (
              <button
                className="mileButton"
                key={index}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, -1, -1, element)}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
              >
                {element}
              </button>
            ))}
        </div>
        <div className="w-full p-5 text-center">
          <table>
            <thead>
              <tr>
                <td></td>
                {temp.map((element) => (
                  <td key={element}>
                    {element === 1
                      ? "18-24years"
                      : element * 5 +
                        15 +
                        "-" +
                        parseInt(element * 5 + 19) +
                        "years"}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {X1.map((element, index) => (
                <tr key={index}>
                  <td padding="none">{element}</td>
                  {temp.map((element) => (
                    <td
                      key={element}
                      padding="none"
                      onMouseOver={(e) => handelMoveTop(e, index, element)}
                    >
                      {components?.[index]?.[element]?.map((i) => i)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="chapter">
        <button
          className="next"
          onClick={() => {
            navigate("/second");
          }}
        >
          THE NEXT CHAPTER
        </button>
      </div>
      <div className="bottom">
        <div className="float-right p-5">
          <TextField
            id="outlined-basic"
            label="Challenge"
            variant="outlined"
            onChange={changeChal}
            name="id"
          />
          <button
            className="addButton"
            onClick={() => {
              dispatch(addChallenge(textChal));
            }}
          >
            Add
          </button>
        </div>
        <div className="float-right p-5 w-[20%]">
          {chalstones &&
            chalstones.map((element, index) => (
              <button
                key={index}
                className="chalButton"
                draggable="true"
                onDragStart={(e) => handleDragStartBottom(e, -1, -1, element)}
                onDragOver={handleDragOverBottom}
                onDragEnd={handleDragEndBottom}
              >
                {element}
              </button>
            ))}
        </div>
        <div className="w-full p-5 text-center">
          <table>
            <thead>
              <tr>
                <td></td>
                {temp.map((element) => (
                  <td key={element}>
                    {element === 1
                      ? " 18-24years"
                      : element * 5 +
                        15 +
                        "-" +
                        parseInt(element * 5 + 19) +
                        "years"}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {X2.map((element, index) => (
                <tr key={index}>
                  <td padding="none">{element}</td>
                  {temp.map((element) => (
                    <td
                      key={element}
                      padding="none"
                      onMouseOver={(e) => handleMoveBottom(e, index, element)}
                    >
                      {componentsBottom?.[index]?.[element]?.map((i) => i)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default First;
