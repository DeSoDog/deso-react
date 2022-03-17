import "./App.css";
import Deso from "deso-protocol";
import { useState } from "react";
const deso = new Deso();

function App() {
  const [sampleResponse, setSampleResponse] = useState();
  const [loginResponse, setLoginResponse] = useState();
  return (
    <div>
      <button
        onClick={async () => {
          const user = await deso.identity.login();
          console.log(user);
          setLoginResponse(JSON.stringify(user, null, 2));
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          deso.identity.logout(deso.identity.getUserKey());
        }}
      >
        logout
      </button>
      <button
        onClick={async () => {
          const user = await deso.user.getSingleProfile({
            PublicKeyBase58Check: deso.identity.getUserKey(),
          });
          console.log(user);
          setSampleResponse(JSON.stringify(user, null, 2));
        }}
      >
        get user
      </button>

      <div>
        Login info
        <pre>{loginResponse}</pre>
      </div>
      <div>
        User info
        <pre>{sampleResponse}</pre>
      </div>
    </div>
  );
}

export default App;
