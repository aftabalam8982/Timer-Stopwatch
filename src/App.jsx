import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div className='w-full h-screen bg-slate-400 flex flex-col items-center'>
      <Navbar />
      <Stopwatch />
      <Timer minute={2} />
      {/*<Button /> */}
    </div>
  );
};

export default App;
