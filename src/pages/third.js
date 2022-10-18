import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X1 } from "../constant";
import { addChangeChart } from "../reducer/changeChart";
import { useNavigate } from "react-router-dom";

const Third = () => {
  const SecondTops = useSelector((state) => state.SecondTop).value;
  const SecondBottoms = useSelector((state) => state.SecondBottom).value;
  const ChangeChart = useSelector((state) => state.ChangeChart).value;
  const [drag, setDrag] = useState(false);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const topName = [];
  const bottomName = [];
  SecondTops.forEach((element) => {
    const temp = element.name;
    if (topName.indexOf(temp) === -1) topName.push(temp);
  });
  SecondBottoms.forEach((element) => {
    const temp = element.nameBottom;
    if (bottomName.indexOf(temp) === -1) bottomName.push(temp);
  });

  const handleValue = (e, index) => {
    if (drag) {
      dispatch(addChangeChart({ index: index, name: name }));
    }
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDragEnd = (event) => {
    event.target.style.opacity = 1;
    setTimeout(() => {
      setDrag(false);
    }, 500);
  };

  const handleDragStart = (event, element) => {
    setDrag(true);
    setName(element);
  };

  return (
    <>
      <div className="w-full p-5 text-center">
        <table>
          <thead>
            <tr>
              <td></td>
              {topName.map((element, index) => (
                <td key={index}>
                  <button className="mileButton">{element}</button>
                </td>
              ))}
              {bottomName.map((element, index) => (
                <td key={index}>
                  <button className="chalButton">{element}</button>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {X1.map((element, index) => (
              <tr key={index}>
                <td>{element}</td>
                {topName.concat(bottomName).map((element) => (
                  <td
                    key={element}
                    onMouseOver={(e) => handleValue(e, index)}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, element)}
                    onDragOver={handleDragOver}
                    onDragEnd={handleDragEnd}
                  >
                    {ChangeChart.length &&
                      ChangeChart.map(
                        (elem) =>
                          elem.name === element &&
                          (index > elem.index ? (
                            <>
                              {elem.index < 4 && (
                                <div className="chartGreen">{elem.index}</div>
                              )}
                              {3 < elem.index < 7 && (
                                <div className="chartOrange">{elem.index}</div>
                              )}
                              {elem.index > 6 && (
                                <div className="chartRed">{elem.index}</div>
                              )}
                            </>
                          ) : (
                            <></>
                          ))
                      )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="chapter">
        <button className="next" onClick={() => navigate("/fourth")}>
          MY STORY BIG PICTURE
        </button>
      </div>
    </>
  );
};

export default Third;
