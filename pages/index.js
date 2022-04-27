import Header from "./components/Head";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="case-app">
      <Header title={"case-app"} description={"case-app"} />
      <Navbar />
        <Main />
    </div>
  )
}
