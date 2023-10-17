import React from "react";

export default function SpreadAndRest() {
  // SPREAD WITH ARRAYS
  const numbers = [1, 2, 3, 4];

  //it includes the numbers
  const newNumbers = [...numbers, 5, 6, 7];
  console.log(newNumbers);
  // with out rest
  const newNumbers2 = [numbers, 5, 6, 7];
  console.log(newNumbers2);

  // SPREAD WITH OBJECT

  const person = {
    name: "Naveen",
  };

  const personData = {
    ...person,
    age: 23,
    major: "Masters in Cs",
  };

  console.log(personData);

  // Rest Parameter

  const userfun = (name, age, ...hobbies) => {
    console.log(name);
    console.log(age);
    console.log(hobbies);
  };

  userfun("naveen", 23, "eating", "studying", "sleeping", "watching movies");
  return <div>SpreadAndRest</div>;
}
