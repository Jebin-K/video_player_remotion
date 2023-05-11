import { Sequence, Audio, interpolate } from "remotion";

import { Headline1 } from "./scenes/Headline1";
// import {Headline1} from "./scenes/Headline1New"
import { Headline2 } from "./scenes/Headline2";
import { Headline3 } from "./scenes/Headline3";
import { Product } from "./scenes/Product";
import { FinalScreen } from "./scenes/FinalScreen";

import backgroundMusic from "./assets/audio/backgroundMusic.mp3";
import mouseClickSound from "./assets/audio/mouse-click.mp3";
import fallinSound from "./assets/audio/falling_sound.mp3";
import doorsound from "./assets/audio/door.mp3";
import Grains from "./components/Grains";
import inputData from "../inputData.json";
const products = Object.keys(inputData)
  .filter((key) => key.startsWith("product"))
  .map((key) => inputData[key]);

const productDuration = 18;
const Headline1Scene = { start: 0, duration: 90 };
const Headline2Scene = {
  start: Headline1Scene.start + Headline1Scene.duration,
  duration: 45,
};
const Headline3Scene = {
  start: Headline2Scene.start + Headline2Scene.duration,
  duration: 45,
};
const productsScene = {
  start: Headline3Scene.start + Headline3Scene.duration,
  duration: productDuration * products.length,
};
const FinalScene = {
  start: productsScene.start + productsScene.duration,
  duration: 30,
};

export const SaveBigTemplate = () => {
  return (
    <div>
      <Sequence from={Headline1Scene.start} jn>
        <Audio
          id="none"
          src={backgroundMusic}
          volume={(f) =>
            interpolate(
              f,
              [FinalScene.start - 5, FinalScene.start + 30],
              [0.3, 0.05],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            )
          }
        />
      </Sequence>
      {/* Heading 1 Save Big */}
      <Sequence
        from={Headline1Scene.start}
        durationInFrames={Headline1Scene.duration}
      >
         <Headline1 />
      </Sequence>
      <Sequence
        from={Headline1Scene.start + Headline1Scene.duration - 16}
        durationInFrames={25}
      >
        <Audio id="none" src={doorsound} volume={1} />
      </Sequence>
      {/* Heading 2 Price Drop Alert */}
      <Sequence
        from={Headline2Scene.start}
        durationInFrames={Headline2Scene.duration}
      >
        <Headline2 />
      </Sequence>
      <Sequence from={Headline2Scene.start + 21} durationInFrames={10}>
        <Audio id="none" src={fallinSound} volume={1} />
      </Sequence>
      {/* Heading 3 Save 75% on everything you love */}
      <Sequence
        from={Headline3Scene.start}
        durationInFrames={Headline3Scene.duration}
      >
        <Headline3 />
      </Sequence>
      {/* Grains */}
      <Grains
        start={Headline1Scene.start}
        duration={
          Headline1Scene.duration +
          Headline2Scene.duration +
          Headline3Scene.duration
        }
      />
      {/* Product screens and the description */}
      {products.map((product, index) => {
        const startFrame = productsScene.start;
        if (index === 0) {
          return (
            <Sequence
              from={startFrame}
              durationInFrames={productDuration}
              key={index}
            >
              <Product productName={product} index={index} />
            </Sequence>
          );
        } else {
          return (
            <Sequence
              from={startFrame + productDuration * index}
              durationInFrames={productDuration}
              key={index}
            >
              <Product productName={product} index={index} />
            </Sequence>
          );
        }
      })}
      Final
      <Sequence from={FinalScene.start} durationInFrames={FinalScene.duration}>
        <FinalScreen />
      </Sequence>
      <Sequence from={FinalScene.start} durationInFrames={15}>
        <Audio id="none" src={mouseClickSound} volume={1} startFrom={3} />
      </Sequence>
    </div>
  );
};
