import React from "react";
import { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const paraRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.dir(inputRef.current.value);
    inputRef.current.value = "Is pink now !";
    inputRef.current.style.backgroundColor = "pink";

    paraRef.current.innerText = "Goodbye";
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          className="form-control mb-2"
        />
        <p ref={paraRef} onClick={() => inputRef.current.focus()}>
          Hello there
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UseRefExample1;
