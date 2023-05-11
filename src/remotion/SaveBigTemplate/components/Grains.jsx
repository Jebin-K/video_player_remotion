import { Sequence, Audio, useVideoConfig, Img } from "remotion";
import grains from "../assets/images/grains.gif";
import grainsSound from "../assets/audio/grainsound.mp3"

export default function Grains({ start, duration }) {
  const { width, height } = useVideoConfig();
  return (
    <div>
      <Sequence from={start} durationInFrames={duration}>
        <Img
        src={grains}
        width={width}
        height={height}
        fit="fill"
        style={{ opacity: 0.5 }}
      /></Sequence>
      
      <Sequence from={start} durationInFrames={duration}>
        <Audio id="none" src={grainsSound} volume={0.3} />
      </Sequence>
    </div>
  );
}
