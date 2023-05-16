import React from "react";
import "../../styles.css";
import { useDispatch, useSelector } from "react-redux";
import { addInput, resetInput, calculateResult } from "./calculatorSlice";

export default function Calculator() {
  const dispatch = useDispatch();
  const expression = useSelector((state) => state.calculator);

  const buttonOnClick = (e) => {
    dispatch(addInput(e.target.value));
  };

  const reset = () => {
    dispatch(resetInput());
  };

  const calculate = () => {
    dispatch(calculateResult());
  };

  return (
    <>
      <table className="calculator">
        <tbody>
          <tr>
            <td colSpan={3}>
              <input
                className="display-box"
                defaultValue={expression}
                type="text"
                id="result"
                disabled=""
              />
            </td>
            {/* clearScreen() function clears all the values */}
            <td>
              <input type="button" defaultValue="C" onClick={reset} id="btn" />
            </td>
          </tr>
          <tr>
            {/* display() function displays the value of clicked button */}
            <td>
              <input type="button" defaultValue={1} onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue={2} onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue={3} onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue="/" onClick={buttonOnClick} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" defaultValue={4} onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue={5} onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue={6} onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue="-" onClick={buttonOnClick} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" defaultValue={7} onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue={8} onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue={9} onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue="+" onClick={buttonOnClick} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" defaultValue="." onClick={buttonOnClick} />
            </td>
            <td>
              <input type="button" defaultValue={0} onClick={buttonOnClick} />
            </td>
            <td>
              <input
                type="button"
                defaultValue="="
                onClick={calculate}
                id="btn"
              />
            </td>
            <td>
              <input type="button" defaultValue="*" onClick={buttonOnClick} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
