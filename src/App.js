import "./App.css";
import Deso from "deso-protocol";
const deso = new Deso();

function App() {
  return (
    <div>
      <button
        onClick={() => {
          deso.identity.login();
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
        }}
      >
        get user
      </button>
    </div>
  );
}

export default App;
