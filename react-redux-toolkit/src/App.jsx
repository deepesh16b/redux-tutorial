import { IcecreamsView } from "../features/icecream/IcecreamView";
import { CakeView } from "../features/cake/CakeView";
import { UserView } from "../features/user/UserView";
import './App.css';

function App() {
  return (
    <div className="card">
      <CakeView />
      <IcecreamsView />
      <UserView />
    </div>
  );
}

export default App;
