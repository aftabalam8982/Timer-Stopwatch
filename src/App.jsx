import { Routes, Route } from "react-router-dom";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import Home from "./components/Home";

const App = () => {
  return (
    <div className='w-full h-screen bg-slate-400 flex flex-col items-center'>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='stopwatch' element={<Stopwatch />}></Route>
          <Route path='timer' element={<Timer minute={2} />}></Route>
        </Route>
      </Routes>
      {/*<Button /> */}
    </div>
  );
};

export default App;
