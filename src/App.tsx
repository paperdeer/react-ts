import Greetings from "./Greetings";
import Counter from "./Counter";
function App() {
  const onClick = (name : string) => {
    console.log(`${name} says hello`)
  }
  return (
   <div>
     <Greetings name="sukHyun" onClick={onClick} />
     <Counter/>
   </div>
  );
}

export default App;
