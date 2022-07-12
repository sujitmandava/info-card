import About from "./About";
import Interests from "./Interests";
import "../App.css";

export default function Main() {
    return (
        <main className="main">
            <h1 className="mainheading">Laura Smith</h1>
            <h2 className="role">Frontend Developer</h2>
            <h3 className="website">laurasmith.website</h3>
            <div className="workButtons">
                <button className="emailButton">Email</button>
                <button className="linkedInButton">LinkedIn</button>
            </div>
            <About />
            <Interests />
        </main>
    );
}
