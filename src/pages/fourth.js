import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { X1, X } from "../constant";

const Fourth = () => {
  const [lastName, setLastName] = useState("");
  const SecondTops = useSelector((state) => state.SecondTop).value;
  const SecondBottoms = useSelector((state) => state.SecondBottom).value;
  const FirstTops = useSelector((state) => state.FirstTop).value;
  const FirstBottoms = useSelector((state) => state.FirstBottom).value;
  const ChangeCharts = Object.entries(
    useSelector((state) => state.ChangeChart)
  );
  useEffect(() => {
    if (ChangeCharts.length !== 0) {
      setLastName(ChangeCharts.sort((a, b) => a[1] - b[1])[0][0]);
    }
  }, [ChangeCharts]);
  return (
    <>
      <div className="top">
        <div className="w-full p-5 text-center">
          <table>
            <thead>
              <tr>
                <td></td>
                {X.map((element) => (
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
              {X1.map((element, rowIndex) => (
                <tr key={rowIndex}>
                  <td padding="none">{element}</td>
                  {X.map((colIndex) => (
                    <td key={colIndex}>
                      {FirstTops.map(
                        (element1) =>
                          element1.col === colIndex &&
                          element1.row === rowIndex && (
                            <>
                              <button className="mileButton">
                                {element1.name}
                              </button>
                            </>
                          )
                      )}
                      {SecondTops.map(
                        (element1) =>
                          element1.col === colIndex &&
                          element1.row === rowIndex && (
                            <>
                              <button className="mileButton">
                                {element1.name.slice(
                                  0,
                                  element1.name.length - 3
                                )}
                              </button>
                              {lastName === element1.name ? "flag" : <></>}
                            </>
                          )
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bottom">
        <div className="w-full p-5 text-center">
          <table>
            <thead>
              <tr>
                <td></td>
                {X.map((element) => (
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
              {X1.map((element, rowIndex) => (
                <tr key={rowIndex}>
                  <td padding="none">{element}</td>
                  {X.map((colIndex) => (
                    <td key={colIndex}>
                      {FirstBottoms.map(
                        (element1) =>
                          element1.col === colIndex &&
                          element1.row === rowIndex && (
                            <>
                              <button className="chalButton">
                                {element1.nameBottom}
                              </button>
                            </>
                          )
                      )}
                      {SecondBottoms.map(
                        (element1) =>
                          element1.col === colIndex &&
                          element1.row === rowIndex && (
                            <>
                              <button className="chalButton">
                                {element1.nameBottom.slice(
                                  0,
                                  element1.nameBottom.length - 6
                                )}
                              </button>
                              {lastName === element1.nameBottom ? (
                                "flag"
                              ) : (
                                <></>
                              )}
                            </>
                          )
                      )}
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

export default Fourth;
