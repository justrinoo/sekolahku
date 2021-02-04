import React from "react";
import Image from '../../assets/image/image-dummy.png'

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="d-block d-md-flex align-items-start">
              <div className="d-flex">
                <img src={Image} alt="Dummy"/>
              </div>
              <div className="mx-3 py-3">
                <h1>Nama Sekolah</h1>

                <p className="font-weight-bolder">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, unde aspernatur blanditiis mollitia deleniti similique consequuntur odit excepturi tempora commodi nobis asperiores autem dolore. Nihil debitis explicabo minus praesentium voluptate.</p>

                <button type="button" class="btn btn-light">Visit Maps</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
