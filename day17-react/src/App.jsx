
import './App.css';
// import Card1 from './components/Card1';
// import Card2 from './components/Card2';
// import Card3 from './components/Card3';
// import Post from './components/Post.jsx'
// import Profile from './components/profile.jsx';
// import Person from './components/Person.jsx'
import Product from './components/Product'


function App() {

  return (
    <>
    <h3> Props?</h3>
    <h4> 매개변수 : 부모에서 자식으로 값을 전단할 때 함수끼리 사용하는 (괄호안에 들어가는 변수들)</h4>
    <Product title="아메리카노" />
    <Product title="카페라떼" price={3000} />
    <Product title="카페모카" price={4000} isHot={true} decf={false}/>



    {/* <h4>이름과 나이를 컴포넌트로 넘기기 (Props) </h4>

    <p>숫자가 계산된 값이나 true, false 타입들을 보낼때는 중괄호를 이용한다</p>
    <p>리액트는 정보를 담는 변수 타입 2개</p>
    <ul>
      <li>"" 따옴표 == string 문자</li>
      <li>{} 중괄호 == 계산되거나 바뀌는 값을 담는 타입</li>
    </ul>
    <Person name="이서희" age={20} gender={true}/>
    {/* 성별을 추가하기 */}
    {/* true이면 "여성",false이면 "남성" */}




{/* 
    <Post title="출석1등" userId="1" id="헤헤" body="역시 1등이 좋아~"></Post>
    <Post title="출석2등" userId="2" id="히히" body="2등도 잘했어!"></Post>
    <Post title="출석3등" userId="3" id="호호" body="3등이다! 아싸~"></Post> */}

      {/* 개발자 3명의 정보를 Profile 태그를 이용해서 정보를 출력하기! */}
      {/* <Profile img="https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjFfMjc0/MDAxNTU1ODAwNDM1MzY3.3g6gfazRsjRyJ6qiO5t_tqezkYtPCt829zuD-z5NRtMg.w0M9DDvakoba5V56ZDd-9iz0Cy6AJsiPvqKMwQfWycAg.JPEG.cherall07/style_57d909c836737.jpg?type=w800" name="Hailey" team="풀스택 개발자" joined="5년차" />

      <Profile img="" name="dex" team="프론트엔드 개발자" joined="3년차" />

      <Profile img="" name="Alex" team="CEO" joined="20년차" />
 */}




{/*     

      
      <h3>Props</h3>
      <p>리액스에서 컴포넌트는 작은 조각 함수</p>
      <p>But, 어떤 컴포넌트는 다른 컴포넌트에게 정보를 전달해야될때가 있음 그때 props를 사용함</p>
      <p>App(부모) Card(자식)에게 선물보내기!</p>



      <Card1 
        img="https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/74a4ac67-1d9c-47c8-af8a-9cac5a3dff73.jpg"
        title="한우 국거리"
        btn="담기"
      />
      <Card2 
        img="https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/396d26eb-4cdc-4291-9520-68e2a14e8c8c.jpg"
        title="삼겹살 500g"
        btn="장바구니"
      />
      <Card3 
        img="https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/832d4251-ecd4-40d6-9d8c-e2784b94726a.jpg"
        title="소고기 샤브샤브"
        btn="주문하기"
      />
     
      
 */}

     
    </>
  )
}

export default App