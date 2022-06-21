import React, { useState } from "react";
import axios from "axios";
import Products from "../src/products";

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const changeHandler = (e) => {
    setSearch(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        "https://api.edamam.com/api/recipes/v2?type=public&app_id=797e9453&app_key=%2006011d94f183da4bc145fe536e6f3c15&q=" +
          search.toString()
      )
      .then((res) => setResult(res.data.hits));
    setSearch("");
  };
  return (
    <div>
      <center>
        <h1>Food Receipe App</h1>
        <br />
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="enter the item"
            value={search}
            onChange={changeHandler}
          />
          <br />
          <br />
          <button class="btn btn-primary">Search</button>
        </form>
        {result.length >= 1 ? <Products result={result} /> : null}
      </center>
    </div>
  );
}

export default App;
