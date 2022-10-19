import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { X1, X } from "../constant";

const Fourth = () => {
  const [lastName, setLastName] = useState("");
  const SecondTops = useSelector((state) => state.SecondTop).value;
  const SecondBottoms = useSelector((state) => state.SecondBottom).value;
  const FirstTops = useSelector((state) => state.FirstTop).value;
  const FirstBottoms = useSelector((state) => state.FirstBottom).value;
  const ChangeCharts = useSelector((state) => state.ChangeChart).value;
  useEffect(() => {
    if (ChangeCharts.length !== 0) {
      let abc = ChangeCharts.map((a) => a);
      const temp = abc.sort((a, b) => b.index - a.index)[0].name;
      setLastName(temp);
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
                      {FirstTops.concat(SecondTops).map(
                        (element1) =>
                          element1.col === colIndex &&
                          element1.row === rowIndex && (
                            <>
                              <button className="mileButton">
                                {element1.name}
                              </button>
                              {lastName.slice(0, lastName.length - 3) ===
                              element1.name ? (
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
                      {FirstBottoms.concat(SecondBottoms).map(
                        (element1) =>
                          element1.col === colIndex &&
                          element1.row === rowIndex && (
                            <>
                              <button className="chalButton">
                                {element1.nameBottom}
                              </button>
                              {lastName.slice(0, lastName.length - 6) ===
                              element1.nameBottom ? (
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
