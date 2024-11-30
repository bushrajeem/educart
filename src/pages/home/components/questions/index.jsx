import React from "react";
import QuestionCard from "./QuestionCard";

function Questions() {
  const question = [
    {
      name: "industries for previewing layouts",
    },
    {
      name: "industries for previewing layouts",
    },
    {
      name: "learn everything there  know about ubiquitous",
    },
    {
      name: "learn everything there  know about ubiquitous",
    },
    {
      name: "nonsensical Latin derived from Cicero's",
    },
    {
      name: "Making your learning more enjoyable",
    },
    {
      name: "Creation timelines for the standard",
    },
    {
      name: "Virtual schooling made even better",
    },
    {
      name: "making Letterset's  transfer sheets placeholder",
    },
    {
      name: "Providing the best learning experience",
    },
  ];

  return (
    <div className="bg-secondary mt-9 h-[110vh]">
      <div className="container px-5 py-24">
        <h1 className="text-[40px] font-bold text-white py-5 text-center">
          Frequently <span className="text-primary">Asked Questions</span>
        </h1>
        <p className="text-center text-white text-[14px]">
          Rrow itself let him love it let him pursue it, ishing for its
          acquisitiendum. Because he will ab hold, uniess but <br />
          through concer, and also of those who resist. Now a pure snore
          disturbeded sum dust.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {question.map((item) => (
          <QuestionCard details={item} />
        ))}
      </div>
    </div>
  );
}

export default Questions;
