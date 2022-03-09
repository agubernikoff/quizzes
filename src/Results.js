import React, {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Results(){

    const history=useHistory()
    const data = history.location.state.data
    const stringifiedData = JSON.stringify(data)
                            .replaceAll('{','')
                            .replaceAll('}','')
                            .replaceAll('"','')
    

  return (
      <div className="results">
          <h2>Results</h2>
          <p>{stringifiedData}</p>
          <p>Add your initials: </p>
      </div>
  )}

export default Results;
