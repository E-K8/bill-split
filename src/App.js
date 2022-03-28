import "./App.css";
import AddBill from "./Components/AddBill";
import BillBox from "./Components/BillBox";
import SplitBillBox from "./Components/SplitBillBox";
import useFetch from "react-fetch-hook";

function App() {
  const { data } = useFetch("https://billsplitters.herokuapp.com/bills");
  return (
    <div className="App">
      <h1>Split your bills</h1>
      <AddBill />
      {data ? <BillBox data={data.payload} /> : <></>}
      {data ? <SplitBillBox data={data.payload} /> : <></>}
    </div>
  );
}

export default App;
