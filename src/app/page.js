'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState();

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
  return (
    <div>
    <div className="bg-slate-900 w-96">
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleNumberClick("7")}>7</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleNumberClick("8")}>8</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleNumberClick("9")}>9</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleOperatorClick("/")}>/</button><br />
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleNumberClick("4")}>4</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleNumberClick("5")}>5</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleNumberClick("6")}>6</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleOperatorClick("*")}>*</button><br />
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleNumberClick("1")}>1</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleNumberClick("2")}>2</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleNumberClick("3")}>3</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleOperatorClick("-")}>-</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={() => handleOperatorClick("+")}>+</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={handleEqualClick}>=</button>
      <button className="bg-slate-600 py-3 px-5 text-white m-2" onClick={handleClearInput}>Clear</button>
      <h1 className="text-2xl text-white">{prevInput}{operator}{input}{result}</h1>
    </div>
    </div>
  );
}

