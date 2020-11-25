
import myWonderfulImage from "./imageInSrc.jpg"
import './App.css';

function App() {
  return (
    <>
    <div className="App-header">
      <div className="container" >
        <h1 className={"title red"}>Guess who's back</h1>
        <h1 className={"title red"}>Back again</h1>
        <h1 className={"title red"}>Faissel's back, tell a friend</h1>
        
        <br/>
        <img src="/imageInPublic.jpg" alt="myimage" />
        <br/>
        <img src={myWonderfulImage} alt ='myImage' />
      </div>
      <iframe
        src={"https://www.youtube.com/embed/YVkUvmDQ3HY"}
        width="320"
        height="240"
        frameborder="0"
        title="Devils Work"
      ></iframe>
      </div>
    </>
  );
}

export default App;
