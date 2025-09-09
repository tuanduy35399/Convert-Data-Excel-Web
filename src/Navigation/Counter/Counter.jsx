import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [input, setInput] = useState("");   // dữ liệu thô nhập vào
  const [name, setName] = useState(""); // kết quả tên sau xử lý
  const [count, setCount] = useState(""); // kết quả đếm sau xử lý

  const handleProcess = () => {
    // Tách dữ liệu thành mảng (mỗi dòng là 1 tên)
    const names = input
      .split("\n") //Tách names thành dòng
      .map((n) => n.trim()) //Cắt space 2 đầu
      .filter((n) => n !== ""); //bỏ những dòng trống
    //Output names= ["An", "Bình", "An", "Hà"]

    // Đếm số lần xuất hiện
    const counter = {};
    //Chuẩn hóa tên 
    names.forEach((item) => {
      let name= item.split(" ") //Trả về mảng A= ["tran", "quoc", "tuan", "duy"]
      .reduce((acc, part, index)=>{ //part là các phần tử trong mảng A, acc chuỗi tích tụ
          let firstWord = part.charAt(0).toUpperCase();
          //Xóa phần tử đầu tiên của part
          let word= firstWord+part.slice(1).toLowerCase();;
          return acc+(index==0?"":" ")+word;
      },"")
      counter[name] = (counter[name] || 0) + 1;
    });

    // Chuyển thành chuỗi kết quả
    const result1 = Object.entries(counter)
      .map(([name, count]) => `${name}`)
      .join("\n");
    const result2 = Object.entries(counter)
      .map(([name,count]) => `${count}`)
      .join("\n");

    setName(result1);
    setCount(result2)
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
