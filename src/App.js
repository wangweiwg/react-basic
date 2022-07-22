import React from "react";

function App() {
  return (
    <div style={{ height: "2000px" }}>
      <p>App---{process.env.NODE_ENV}</p>
      <p>自定义环境：{String(process.env.REACT_APP_NOT_SECRET_CODE)}</p>
    </div>
  );
}

export default App;
