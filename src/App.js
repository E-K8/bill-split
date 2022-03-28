import logo from "./logo.svg";
import "./App.css";
import AddBill from "./Components/AddBill";
import BillBox from "./Components/BillBox";
import SplitBillBox from "./Components/SplitBillBox";
// import GetBills from "./Components/useFetch";
import useFetch from "react-fetch-hook";

function App() {
  const { isLoading, data } = useFetch(
    "https://billsplitters.herokuapp.com/bills"
  );
  return (
    <div className="App">
      <h1>Split you bills</h1>
      {/* <GetBills /> */}
      <AddBill />
      {data ? <BillBox data={data.payload} /> : <></>}
      <SplitBillBox />
    </div>
  );
}

export default App;
