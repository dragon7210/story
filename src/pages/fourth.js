import { useDispatch, useSelector } from "react-redux";
import { X1, X2, X } from "../constant";

const Fourth = () => {
  const SecondTops = useSelector((state) => state.SecondTop).value;
  const SecondBottoms = useSelector((state) => state.SecondBottom).value;
  const FirstTops = useSelector((state) => state.FirstTop).value;
  const FirstBottoms = useSelector((state) => state.FirstBottom).value;
  console.log(FirstTops, SecondTops);
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
                            <button className="mileButton">
                              {element1.name}
                            </button>
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
                            <button className="chalButton">
                              {element1.nameBottom}
                            </button>
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
