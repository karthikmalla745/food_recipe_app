import React from "react";

function Products({ result }) {
  return (
    <div>
      <div className="row">
        {result.map((data) => (
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={data.recipe.image} />
              <div class="card-body">
                <center>
                  <h5 class="card-title">{data.recipe.label}</h5>
                  <p class="card-text">
                    Total amount of calories: {Math.round(data.recipe.calories)}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Buy
                  </a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}
export default Products;
