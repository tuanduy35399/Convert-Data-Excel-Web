import { useState } from "react";
import "./Sum.css";

export default function Sum() {
  const [input, setInput] = useState("");   // dữ liệu thô nhập vào   // dữ liệu thô nhập vào
  const [name, setName] = useState(""); // kết quả tên sau xử lý
  const [count, setCount] = useState(""); // kết quả đếm sau xử lý

  const handleProcess = () => {
    // Tách dữ liệu thành mảng (mỗi dòng là 1 tên)
    const names = input
      .split("\n") //Tách names thành dòng
      .map((n) => n.trim()) //Cắt space 2 đầu
      .filter((n) => n !== ""); //bỏ những dòng trống
    //console.log names= ["An", "Bình", "An", "Hà"]

    // Kiểm tra xem tên có xuất hiện 2 lần không?
    const obj = names.reduce((acc, value)=>
    {
      let parts= value.split("\t"); //["Trần Quốc Tuấn Duy", "2"]
      let count= Number(parts.pop());
      // let key = parts.join(" ");
      //Lúc này part còn ["Trần Quốc Tuấn Duy"]
      let [rawName]=parts; //"Trần Quốc Tuấn Duy"
      // console.log(rawName);
      let ten= rawName.split(" ")
      let key= ten.map(value=>{
        let firstWord= value.charAt(0).toUpperCase();
        return firstWord+ value.slice(1).toLowerCase();
      })
      ten = key.join(" ")
      acc[ten]= (acc[ten] || 0) +count;
      return acc;
    },{});

    // Chuyển thành chuỗi kết quả
    let result1= "";
    let result2= "";
    Object.entries(obj) //trả về mảng gồm các mảng con [[key1,value1], [key2, value2]]
    .map(([key, value])=> {
        result1+=key+"\n";
        result2+=value+"\n";
    })

    setName(result1);
    setCount(result2);
  };

  return (
    <>
      <textarea
        placeholder="Nhập dữ liệu cần cộng dồn (mỗi tên 1 dòng)
Vd: 
Trần Quốc Tuấn Duy 3
Trần Quốc Tuấn Duy 9
Nguyễn Văn A 4
Nguyễn Văn A 6"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <button className="solve" onClick={handleProcess}>
        Xử lý
      </button>

      <textarea
        placeholder="Tên người tham gia"
        value={name}
        readOnly
      ></textarea>
      <textarea
        placeholder="Số buổi"
        value={count}
        readOnly
      ></textarea>
    </>
  );
}
