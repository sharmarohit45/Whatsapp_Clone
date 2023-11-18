
import {Routes,Route} from "react-router-dom"
import HomePage from "./Components/HomePage";
import Status from "./Components/Status/Status";
import StatusViewer from "./Components/Status/StatusViewer";
import CreateGroup from "./Components/Group/CreateGroup";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/status" element={<Status/>}></Route>
      <Route path="/status/:userId" element={<StatusViewer />}></Route>
      <Route path="/group" element={<CreateGroup />}></Route>
    </Routes>
    </>
  );
}

export default App;
