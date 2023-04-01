import React from "react";
import "./Question.css";
import Buttons from "../Option/Buttons";
import { toast } from "react-hot-toast";

const Question = (props) => {
  const correctAnswerHandle = (correctAnswer) => {
    if (correctAnswer) {
      toast(correctAnswer);
    }
  };

  const { question, options, id, correctAnswer } = props.question;
  return (
    <article className="rounded-xl border border-gray-700 bg-sky-400 p-4 w-80 h-auto">
      <div className="flex items-center gap-4">
        <div>
          <p className=" font-small text-black">{question}</p>
        </div>
      </div>
      <ul className="menu menu-compact bg-base-100 w-56 p-2 rounded-box mx-auto mt-3">
        {options.map((option) => (
          <Buttons correctAnswer={correctAnswer} key={id} option={option} />
        ))}
      </ul>

      <div className="flex justify-end">
        <span className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm mt-1">
          <button
            onClick={() => correctAnswerHandle(correctAnswer)}
            className="inline-block p-1 text-gray-700 hover:bg-gray-50 focus:relative"
          >
            Answer
          </button>
        </span>
      </div>
    </article>
  );
};

export default Question;
