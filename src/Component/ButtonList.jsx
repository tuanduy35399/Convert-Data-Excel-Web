import {data} from "../Navigation/data.js"
import './Button.css'
export default function ButtonList({Clicked, isActive}) {
  return (
    <>
          {
            data.map((item)=>(
              <button className={`Button ${(isActive === item.id)?'active':undefined}`} onClick={()=>Clicked(item.id)}>{item.id}</button>
            ))
          }
    </>
  );
}
