import React from "react";
import videos from "../../media/mflix.mp4";
// const loadingImg =
//   "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
     <video loop muted autoPlay src = {videos} preload={'auto'} >
      {/* <source ></source> */}
     </video>
);

// const Loading = () => (
//   <div className="spinner">
//     <img src={loading} alt="Loading..." />  
//   </div>
// );

export default Loading;