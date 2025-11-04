import './App.css'

function Header() {
  return (
    <h1>hallo</h1>
  )
}

function Container(){
  return(
    <div>
      <h2>Container title</h2>
      <p>Container Content</p>
    </div>
  )
}

function List() {
  return(
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
  )
}

function Product({ name, price }: { name: string; price: number; }) {
  return (
    <div>
      nama: {name}, Harga: {price}
    </div>
  )
}

function Table() {
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ahmad</td>
          <td>1000</td>
        </tr>
        <tr>
          <td>Ucup</td>
          <td>23</td>
        </tr>
      </tbody>
    </table>
  )
}

function App() {
  const name: string = "satrio"; 
  const isPrimary: boolean = true;
  return (
    // fragment
    <> 
      <div style={{
          fontFamily: "sans serif",
          outline:"2px solid yellow", 
          boxShadow: "-2px 6px 5px 0px green", 
          padding: "10px",
          backgroundColor: "#000B58"}}>
          <Product name="iphone" price={1000}/>
      <div/>
        <List/>
       <div style={{padding: "20px", marginBottom: "30px", outline: "2px solid red"}}>
       <Header/>
       </div>
       <div style={{outline: "5px dotted green"}}>
       <Container/>
       </div>
       <Table/>
       <div> Hello world </div>
       <div> My name is {name.toUpperCase()}</div>
       <button>{isPrimary ? "Primary" : "Secondary"} button</button>
      </div>
    </>
  )
}

export default App
