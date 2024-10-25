import logo from "./logo.svg";
import "./App.css";
import MyNavbar from "./components/layout/navbar/MyNavbar";  // Verwende MyNavbar
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";
import StandardBtn from "./components/common/standard-btn/StandardBtn";
import ActionBtn from "./components/common/standard-btn/ActionBtn/ActionBtn";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main-container">
      <MyNavbar /> {/* Verwende die umbenannte Navbar-Komponente */}

      <Content>
        <div>Hello from Earth</div>
        <StandardBtn>IT</StandardBtn>
        <StandardBtn>TESTT</StandardBtn>
        <StandardBtn>TEST!</StandardBtn>
        <StandardBtn>TEST!</StandardBtn>
        <StandardBtn>IT</StandardBtn>
        <ActionBtn>HALLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOO</ActionBtn>
      </Content>
      <Footer />
      <ActionBtn>HALLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOO</ActionBtn>
    </div>
  );
}

export default App;
