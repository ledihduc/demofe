import logo from "./logo.svg";
import "./App.css";
import PostService from "./services";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const fetchData = async () => {
    const data = await PostService.list();
    setData(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      {data?.map((item) => {
        return (
          <>
            <p>{item.longDescription}</p>
          </>
        );
      })}
    </div>
  );
}

export default App;
