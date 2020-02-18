import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";

function People() {
  const friends = [
    {
      name: "john",
      job: "developer",
      age: 23,
      company: "apple"
    },
    {
      name1: "bob",
      job1: "designer",
      age1: 21,
      company1: "facebook"
    },
    {
      name: "susy",
      job: "arsonist",
      age: 26,
      company: "gooogle"
    }
  ];
  return (
    <section>
      <Person leroy={friends[0]} jenkins={friends[1]}></Person>
      {/* <Person person={friends[1]}></Person> */}
      {/* <Person person={friends[2]}></Person> */}
    </section>
  );
}

const person = {
  name: "john",
  age: 26
};

const showPerson = ({ name, age }) => console.log(name, age);

showPerson(person);

const Person = props => {
  const { name, job, age, company } = props.leroy;
  // props.person bo mamy nesting

  return (
    <article>
      <h1>{name}</h1>
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <h1>{props.jenkins.name1}</h1>
      <hr />
    </article>
  );
};

// const Person = ({
//   leroy: { name, job, age, company },
//   jenkins: { name1, job1, age1, company1 }
// }) => {
//   return (
//     <article>
//       <h1>{name}</h1>
//       <p>{job}</p>
//       <p>{age}</p>
//       <p>{company}</p>
//       <h1>{name1}</h1>
//       <p>{job1}</p>
//       <p>{age1}</p>
//       <p>{company1}</p>
//       <hr />
//     </article>
//   );
// };

ReactDOM.render(<People></People>, document.getElementById("root"));
