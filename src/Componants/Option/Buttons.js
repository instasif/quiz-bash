import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Buttons = ({ correctAnswer , option}) => {
    const answerHandler = (option) => {
      if (option === correctAnswer) {
        toast.success("correct answer!!");
      } else {
        toast.error("try again!!");
      }
    };
  return (
    <div>
      <li>
        <Link onClick={() => answerHandler(option)}>{option}</Link>
      </li>
    </div>
  );
};

export default Buttons;
