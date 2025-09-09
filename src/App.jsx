import { useState } from "react";
// import {data} from "./data"
import ButtonList from "./Component/ButtonList";
import RenderBox from "./Component/RenderBox";
import './App.css'
export default function App() {
  const [selectedId, setSelectedId] = useState('Counter');
  // const [active, setActive] =useState(false)
  // function handle(topic) {
  //   setSelectedId(topic)
  //   setActive(true)
  // }
  return (
    <>
      <center><h1>Chuyển đổi dữ liệu thông minh</h1></center>

        <div className="navigation">
          <ButtonList Clicked={setSelectedId} isActive={selectedId}/>
        </div>
        <div className="layout_render">
          <RenderBox topic={selectedId}/>
        </div>
        
    </>
  );
}
