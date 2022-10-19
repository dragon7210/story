import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X1 } from "../constant";
import { addChangeChart } from "../reducer/changeChart";
import { useNavigate } from "react-router-dom";
import MSlider from "../components/MSlider";
import Box from "@mui/material/Box";

const Third = () => {
  const [topValue, setTopValue] = useState({});
  const [bottomValue, setBottomValue] = useState({});

  const SecondTops = useSelector((state) => state.SecondTop).value;
  const SecondBottoms = useSelector((state) => state.SecondBottom).value;
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
  useEffect(() => {
    dispatch(addChangeChart(Object.assign(topValue, bottomValue)));
  }, [topValue, bottomValue]);
  return (
    <>
      <div className="w-full p-5 text-center">
        <table>
          <thead>
            <tr>
              <td></td>
              {topName.map((element, index) => (
                <td key={index}>
                  <button className="mileButton">
                    {element.slice(0, element.length - 3)}
                  </button>
                </td>
              ))}
              {bottomName.map((element, index) => (
                <td key={index}>
                  <button className="chalButton">
                    {element.slice(0, element.length - 6)}
                  </button>
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {X1.map((element) => (
                  <div key={element}>{element}</div>
                ))}
              </td>
              {topName.map((element, index) => (
                <td key={index}>
                  <Box sx={{ height: 240 }}>
                    <MSlider
                      value={topValue[element] ?? 0}
                      onChange={(e, val) => {
                        let newTopValue = { ...topValue };
                        newTopValue[element] = val;
                        setTopValue(newTopValue);
                      }}
                    />
                  </Box>
                </td>
              ))}
              {bottomName.map((element, index) => (
                <td key={index}>
                  <Box sx={{ height: 240 }}>
                    <MSlider
                      value={bottomValue[element] ?? 0}
                      onChange={(e, val) => {
                        let newBottomValue = { ...bottomValue };
                        newBottomValue[element] = val;
                        setBottomValue(newBottomValue);
                      }}
                    />
                  </Box>
                </td>
              ))}
            </tr>
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
