import "./App.css";
import DisplayPhoto from "./Components/DisplayPhoto";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
    return (
        <div className="App">
            <div className="nonfooter">
                <DisplayPhoto></DisplayPhoto>
                <Main></Main>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
