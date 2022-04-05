import React from "react";

export default function WashLocation(data) {
  return (
    <button
      className="btn btn-wash btn-location"
      id="buttons"
      onClick={data.locationClicked}
      /*Koden nedenunder gør at den vaskehal der er under maintenance, ikke kan vælges. */
      disabled={data.location.status !== "available" ? "on" : ""}
      value={data.location.id}
    >
      {data.location.name}
    </button>
  );
}
