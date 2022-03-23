import React from "react";

export default function ProjectCard(props) {
  // const project = props.project
  return (
    <div className="py-2 flex items-center justify-center px-3 ">
      <div className="border-white border-2 rounded-lg w-1/7 shadow-lg">
        <div className="border-white border-3 rounded-lg">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://media.nationalgeographic.org/assets/photos/818/719/3d97f911-594f-4257-880c-d9aa1c6da22d.jpg"
              className="card-img rounded-t-lg h-60 w-full object-cover"
            />

            <div className="absolute bottom-0 right-0">
              <h2 className="p-0.5 bg-opacity-70 rounded-3 bg-zc30-blue text-black text-center font-light mb-1 position-relative shadow-inner shadow-lg">
                £{props.project.cptgbp}/ct
              </h2>
            </div>
          </div>

          <h2 className="text-white text-xxl-center text-center font-light mb-1 position-relative flex-center shadow-lg">
            {props.project.projectname}
          </h2>
        </div>

        <div className="bg-white p-2 position-relative text-center">
          <div className="flex justify-center">
            <div className=" items-center">
              <img
                src="https://www.svgrepo.com/show/127575/location-sign.svg"
                className="w-5 h-5 align-content-center opacity-75"
              />
            </div>
            <p className="flex font-light text-lg">{props.project.location}</p>
          </div>

          <a href={"./projects/" + props.project.id}>
            <button className="font-semibold hover:text-white py-1 px-4 border hover:border-transparent rounded">
              More details
            </button>
          </a>
        </div>

        {/*add progress bar here*/}
        <footer className="bg-white bg-gray-100 rounded-b-lg text-right py-1 px-8 text-xs text-gray-500">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full">
                Captured Carbon:{" "}
                {props.project.totalsupply - props.project.balance} tCO2e
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block opacity-80">
                Carbon Remaining: {props.project.balance} tCO2e
              </span>
            </div>

          </div>

          <div className="overflow-hidden flex h-2 mb-2 text-xs rounded shadow-md">
            <div
              style={{ width: "100%", background: "white", opacity: "100%" }}
            >
              <div className="overflow-hidden flex h-2 mb-2 text-xs rounded">
                <div
                  style={{
                    width: `${
                      props.project.totalsupply - props.project.remainingsupply
                    }%`,
                    background: "#77C9D4",
                    opacity: "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
