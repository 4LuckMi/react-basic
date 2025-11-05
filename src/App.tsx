import { useState } from "react";
import Child from "./pages/Child";
import GrandChild from "./pages/GrandChild";
import TodoList from "./pages/TodoList";
import TodoForm from "./pages/TodoForm";
// interface User {
//   name: string;
//   age: number;
// }

function App() {
  const [count, setCount] = useState<number>(0);
  const message = "Message";
  const increase = () => setCount(count+1)
  // const [user, setUser] = useState<User>({name: "", age: 0});

  // const [count, setCount] = useState<number>(0);
  // const [name, setName] = useState<string>("");
  // const [hasil, setHasil] =
  // function decrement(){
  //   setCount(count - 1);
  //   if(count === 0)
  //     alert("Count cannot be naegative");
  //   return;
  // }
  // function increment(){
  //   setCount(count + 1);
  // }
  // function kurangDariLima(e: React.ChangeEvent<HTMLInputElement>){
  //   setName(e.target.value)
  //   if(name.length < 5){
  //     alert("Nama Kurang panjang");
  //     return;
  //   }
  // }


  // const [angka1, setAngka1] = useState<number>(0);
  // const [angka2, setAngka2] = useState<number>(0);
  // const [operator, setOperator] = useState<string>("+")
  // const [hasil, setHasil] = useState<number>(0);
  
  // function inAngka2(e: React.ChangeEvent<HTMLInputElement>){
  //   setAngka2(e.target.valueAsNumber);
  //   if(angka2 === 0)
  //     alert("Angka Ke dua tidak boleh kosong");
  //   return
  // }
  // function inAngka1(e: React.ChangeEvent<HTMLInputElement>){
  //   setAngka1(e.target.valueAsNumber);
  // }

  // function operate(){
  //   if(operator === "+"){
  //     setHasil(angka1+angka2);
  //   } if (operator === "-") {
  //     setHasil(angka1-angka2);
  //   } if (operator === "*") {
  //     setHasil(angka1*angka2);
  //   } if (operator === "/") {
  //     setHasil(angka1/angka2);
  //   }
  //   return setHasil
  // }
  return (
    <>
    <h1>Parent</h1>
    <p>{count}</p>
    {/* Memanggil child */}
    <Child childIncrese={increase}/>
    <TodoList/>
    <TodoForm/>


    {/* <input type="text" placeholder="name" onChange={(e) => setUser({...user, name: e.target.value})} />
    <input type="number" placeholder="name" onChange={(e) => setUser({...user, age: e.target.valueAsNumber})} />
    <p>Nama: {user.name} - Age: {user.age}</p>

    <TodoList/> */}

    {/* <div className="m-2">
      <input className="border-2 border-solid" type="number"  name="" id="" value={angka1} placeholder="isi nama" 
        onChange={inAngka1}/>
      <select className="ml-5 mr-5 border-2 border-solid" name="operator" id="" value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input className="border-2 border-solid ml-5 mr-5 rounded-xl" type="number"  name="" id="" value={angka2} placeholder="isi nama" 
        onChange={inAngka2}/>
      <button className="border-2 border-solid" onClick={operate}>=</button>
      <p className="border-2 border-solid w-24"> Hasil: {hasil}</p>
    </div> */}
    
      {/* <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>kurang</button>
      <br />
      <br />
      <input type="text" name="" id="" value={name} placeholder="isi nama" 
      onChange={kurangDariLima}/>
      <p>Hallo {name}</p> */}
    </>
  )
}

export default App
