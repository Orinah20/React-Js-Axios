import './App.css';
import SideNav from "./SideNavigation";

function App() {
  return (
    <div className="App">
        <div className="App-header p-1 fixed w-full z-10">
            <p>
                <a href={"/"}>DMD EDITOR</a>
            </p>
        </div>
        <SideNav/>
    </div>
  );
}

export default App;
