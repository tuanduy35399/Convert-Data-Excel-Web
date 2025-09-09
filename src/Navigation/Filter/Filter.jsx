import { useState } from "react";
import "./Filter.css";

export default function Filter() {
  const [input, setInput] = useState("");   // dữ liệu thô nhập vào
  const [condition, setCondition]=useState('name');
  const [value, setValue]=useState("");
  const [names, setNames]=useState("");
  const [count, setCount]=useState("");
  const handleProcess = () => {
    // Tách dữ liệu thành mảng (mỗi dòng là 1 tên)
    const names = input
      .split("\n") //Tách names thành dòng
      .map((n) => n.trim()) //Cắt space 2 đầu
      .filter((n) => n !== ""); //bỏ những dòng trống
    //console.log names= ["An", "Bình", "An", "Hà"]

    // Kiểm tra xem tên có xuất hiện 2 lần không?
    //Đưa mảng về thành dict với key là tên, value là số buổi
    const obj = names.reduce((acc, value)=>
    {
      let parts= value.split("\t");
      let count= Number(parts.pop());
      // let key = parts.join(" ");
      acc[parts]= (acc[parts] || 0) +count;
      return acc;
    },{});

    let objFiltered= Object.entries(obj).reduce((acc,[key, item])=>{
        if(condition=='name') {
            if(key.trim().toLowerCase().includes(value.trim().toLowerCase())) acc[key]=item;
        }
        else if(condition=='gte'){
            if( item >= value) acc[key]=Number(item);
        } else {
            if( item <= value) acc[key]=Number(item);
        }
        return acc;
    },{});
    setNames(Object.keys(objFiltered).join("\n"));
    setCount(Object.values(objFiltered).join("\n"));
  };
  return (
    <>
      <textarea
        placeholder="Nhập dữ liệu cần đếm (mỗi tên 1 dòng)
VD: 
Trần Quốc Tuấn Duy
Nguyễn Văn A"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <div className="edit_layout">
        <select className="drop_box" value={condition} onChange={e => setCondition(e.target.value)}>
            <option value="name">Tên chứa</option>
            <option value="gte">Số buổi ≥</option>
            <option value="lte">Số buổi ≤</option>
        </select>
        <input className="input_filter" placeholder="Nhập vào điều kiện" value={value} onChange={(e)=> setValue(e.target.value)} ></input>
        <button className="solve" onClick={handleProcess}>
          Xử lý
        </button>
      </div>

      <textarea
        placeholder="Tên người tham gia"
        value={names}
        readOnly
      ></textarea>
      <textarea
        placeholder="Số buổi"
        value={count}
        readOnly
      ></textarea>
    </>
  )
}
