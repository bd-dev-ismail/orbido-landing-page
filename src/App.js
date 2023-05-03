import FreeResource from "./Components/FreeResource/FreeResource";
import Home from "./Components/Home/Home";
import StickeyBar from "./Components/StickeyBar/StickeyBar";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <div className="my-[10rem]">
        <StickeyBar />
      </div>
      <div className="my-[20rem] min-h-screen">
        <FreeResource />
      </div>
    </div>
  );
}

export default App;
