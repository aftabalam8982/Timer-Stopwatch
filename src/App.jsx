import Button from "./components/Button";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div className='w-full h-screen bg-slate-400 flex flex-col items-center'>
      <Navbar />
      <Counter />
      <Timer minute={2} />
      {/*<Button /> */}
    </div>
  );
};

export default App;
