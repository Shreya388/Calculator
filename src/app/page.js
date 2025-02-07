'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState(" ");
  const [prevInput, setPrevInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState();

  const Buttons = (props) => {
    return (
      <button className="bg-slate-600 py-4 px-5 h-24 w-28 text-white m-1" onClick={() => handleNumberClick(props.number)} >
        {props.number}
      </button>
    )
  }
  const OperButtons = (props) => {
    return(
      <button className="bg-slate-600 py-4 px-5 h-24 w-28 text-white m-1" onClick={() => handleOperatorClick(props.oper)} >
        {props.oper}
      </button>
    )
  }

  const handleNumberClick = (num) => {
    setInput(input + num);
  }

  const handleOperatorClick = (opr) => {
    setPrevInput(input);
    setOperator(opr);
    setInput("");
  }

  const handleEqualClick = () => {
    let result;
    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(input);

    if (operator === "+") result = num1 + num2;
    if (operator === "-") result = num1 - num2;
    if (operator === "*") result = num1 * num2;
    if (operator === "/") result = num1 / num2;

    setInput(result.toString());
    setPrevInput("");
    setOperator(null);
  };

  const handleClearInput = () => {
    setInput("");
    setResult(null);
    setPrevInput("");
    setOperator(null);
  }

  const handlePrevInput = () => {
    setInput(input.slice(0, -1));
  }
  return (
    <div>
      <div className="bg-slate-900 w-1/3 mx-auto my-auto mt-10">
        <div className="h-20 border border-slate-400">
          <h1 className="text-2xl text-slate-50 py-4 px-4 float-right">{prevInput}{operator}{input}{result}</h1>
        </div>
        <Buttons number={7} />
        <Buttons number={8} />
        <Buttons number={9} />
        <OperButtons oper="/" /><br />
        <Buttons number={4} />
        <Buttons number={5} />
        <Buttons number={6} />
        <OperButtons oper="*" /><br />
        <Buttons number={1} />
        <Buttons number={2} />
        <Buttons number={3} />
        <OperButtons oper="-" /><br />
        <Buttons number={0} />
        <Buttons number="." />
        <OperButtons oper="%" />
        <OperButtons oper="+" /><br />
        <button className="bg-slate-600 py-3 px-5 h-24 w-28 text-white m-1" onClick={handleEqualClick}>=</button>
        <button className="bg-slate-600 py-3 px-5 h-24 w-28 text-white m-1" onClick={handlePrevInput}>Undo</button>
        <button className="bg-slate-600 py-3 px-5 h-24 w-28 text-white m-1" onClick={handleClearInput}>Clear</button>
      </div>
    </div>
  );
}