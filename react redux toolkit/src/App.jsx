import { IcecreamsView } from "../features/icecream/IcecreamView";
import { CakeView } from "../features/cake/CakeView";
import { UserView } from "../features/user/UserView";

function App() {
  return (
    <div>
      <CakeView />
      <IcecreamsView />
      <UserView />
    </div>
  );
}

export default App;
