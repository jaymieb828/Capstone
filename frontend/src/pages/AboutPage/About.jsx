import React from "react";

function AboutPage() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About My Pantry</h1>
            <p>
              My Pantry is a Capstone project built by Jaymie Batoon for devCodeCamp's full stack coding bootcamp course. This app has been designed with a Django backend, React front end, MySql Database and styled with Bootstrap.
            </p>
            <h1 class="font-weight-light"> About Jaymie</h1>
            <p>Jaymie is a Disabled Veteran who served in the US Navy and has worked as a Field Service Engineer in Semiconductor Manufacturing for nearly two decades. He is currently enrolled with devCodeCamp's full stack flex program in the hopes of pivoting his tech career from hardware to software. Jaymie was born and raised in Honolulu, HI and is currently living in Southbury, CT with his wife, Audrey, and his two children, Addison and Jace.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;