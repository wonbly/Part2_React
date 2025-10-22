
import './App.css';
// import DomEx from'./DomEx.jsx';
// import JsxText from './JsxText.jsx';
import JsxText2 from './JsxText2.jsx';
import JsxText3 from './JsxText3.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx';
import DefaultButton from './components/DefaultButton.jsx';
import FixedAuthStatus from './components/FixedAuthStatus.jsx';
import SystemAlert from './components/SystemAlert.jsx';

function App() {

  return (
    <>

        {/* html 태그랑 css를 이용해서 구현 */}
        <WelcomeMessage />
        <DefaultButton />
        <FixedAuthStatus />
        <SystemAlert />
        {/* <JsxText3 /> */}
        {/* <JsxText2 /> */}
        {/* <JsxText /> */}
        {/* <DomEx /> */}

    </>
  )
}

export default App
