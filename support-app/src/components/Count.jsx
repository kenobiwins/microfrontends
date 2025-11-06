import React from "react";

import { observer } from "mobx-react-lite";
import { supportStore } from "../mobx/store";

const Count = observer(() => {
  return (
    <div style={{ border: "2px solid orange", padding: 16 }}>
      <h2>Support Microfrontend</h2>
      <p>Count: {supportStore.count}</p>
      <button onClick={() => supportStore.increment()}>Increment</button>
      <button onClick={() => supportStore.decrement()}>Decrement</button>
    </div>
  );
});

export default Count;
