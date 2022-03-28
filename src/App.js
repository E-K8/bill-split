import logo from "./logo.svg";
import "./App.css";
import AddBill from "./Components/AddBill";
import Billbox from "./Components/BillBox";
import SplitBillBox from "./Components/SplitBillBox";

function App() {
  return (
    <div className="App">
      <h1>Split you bills</h1>
      <AddBill />
      <Billbox />
      <SplitBillBox />
    </div>
  );
}

export default App;
