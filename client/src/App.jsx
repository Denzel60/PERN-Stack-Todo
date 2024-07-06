import { useEffect } from "react";
import { useState } from "react";
import ListHeader from "./Components/ListHeader";
import ListItems from "./Components/ListItems";

function App() {
  const userEmail = "cdoveston1d@go.com";
  const [tasks, setTasks] = useState(null);
  const getData = async () => {
   
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const data = await response.json();
      setTasks(data)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => getData, []);
  console.log(tasks);
  const sortedTasks = tasks?.sort((a,b)=>new Date(a.date) -  new Date(b.date))

  return (
    <div className="app">
      <ListHeader listName={"holiday tick list"} />
      {sortedTasks?.map((task)=><ListItems key = {task.id} task= {task}/>)}
    </div>
  );
}

export default App;
