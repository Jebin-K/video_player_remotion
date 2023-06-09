import "./App.css";
import { Player } from "@remotion/player";
import { SaveBigTemplate } from "./remotion/SaveBigTemplate/index.jsx";



function App() {
  return (
    <div className="App">
      <h1>Remotion Player</h1>
      <Player
        style={{ width: "600px" }}
        component={SaveBigTemplate}
        durationInFrames={300}
        // compositionWidth={1080}
        // compositionHeight={1920}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
        controls
      />
    </div>
  );
}

export default App;
