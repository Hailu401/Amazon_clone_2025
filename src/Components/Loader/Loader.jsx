import React from 'react'
import{ FadeLoader} from "react-spinners";

const Loader = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"50vh"
    }}>
      <FadeLoader color="#ccc52f" />
    </div>
  )
}

export default Loader;
