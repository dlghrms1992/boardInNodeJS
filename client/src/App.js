import axios from "axios";
import { useEffect, Fragment } from 'react';
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Section from "./components/common/section";
import Nav from "./components/common/nav";
import './asset/css/nav.css';
import './asset/css/header.css';
import './asset/css/section.css';
import './asset/css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const callIndex = async () => {
    axios.get("/api").then((res) => console.log(res.data.list));

  };

  useEffect(() => {
    callIndex();
  },[]);

  return (
    <Fragment>
      <Nav/>
      <Header/>
      <Section/>
      <Footer/>
    </Fragment>
  );
}

export default App;
