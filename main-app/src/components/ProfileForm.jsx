import React from "react";
import { observer } from "mobx-react-lite";
import { mainStore } from "../mobx/store";

const ProfileForm = observer(() => {
  return (
    <div style={{ border: "2px solid blue", padding: 16 }}>
      <h1>Main Host App</h1>
      <p>Current user: {mainStore.user}</p>
      <input
        value={mainStore.user}
        onChange={(e) => mainStore.setUser(e.target.value)}
        placeholder="Set user name"
      />
      <hr />

    </div>
  );
});

export default ProfileForm;
