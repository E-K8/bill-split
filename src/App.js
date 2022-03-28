import logo from "./logo.svg";
import "./App.css";
import AddBill from "./Components/AddBill";
import BillBox from "./Components/BillBox";
import SplitBillBox from "./Components/SplitBillBox";

function App() {
  return (
    <div className="App">
      <h1>Split you bills</h1>
      <AddBill />
      <BillBox />
      <SplitBillBox />
    </div>
  );
}

export default App;
