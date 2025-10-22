
import './App.css'
import Test1 from './Test/Test1'

function App() {


  let coffee = {
    name: "바닐라라떼",
    price: "4,000원",
    size: "Tall"
  }

  return (
  <> 

<Test1 item = {coffee} />
  </>
  );
}

export default App



  // // 배열을 props로 넘기기
  // let fruits = ["🍎 사과", "🍌 바나나", "🍇 포도"];

  // // 객체를 props로 넘기기
  // let fruitsInfo = {
  //   name : "🍎",
  //   price : 2000
  // };

  // // 만약 값이 없으면 과일의 가격을 안 띄우고 싶다!
  // let fruitsInfo2 = {
  //   name : "🍌",
  //   color : "yellow"
  // };

  // return (
  //   <>

  //   {/* 객체 형태로 꺼내올 때 */}
  //   <FruitList items={fruitsInfo}/>
  //   <FruitList items={fruitsInfo2}/>

  //   {/* 배열 형태로 꺼내올 때 */}
  //   {/* <FruitList items={fruits}/> */}
      
  //   </>