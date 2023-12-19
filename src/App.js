
import {Routes,Route} from "react-router-dom"
import HomePage from "./Components/HomePage";
import Status from "./Components/Status/Status";
import StatusViewer from "./Components/Status/StatusViewer";
import SignIN from "./Components/Register/SignIN";
import SignUp from "./Components/Register/SignUp";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/status" element={<Status/>}></Route>
      <Route path="/status/:userId" element={<StatusViewer />}></Route>
      <Route path="/signin" element={<SignIN />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
    </Routes>
    </>
  );
}

export default App;
