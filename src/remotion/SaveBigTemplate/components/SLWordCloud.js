import React from "react";
import {

  useCurrentFrame,
  useVideoConfig,
  interpolate,
} from "remotion";
import WordCloud from "react-d3-cloud";

function SLWordCloud({headline}) {
  let colorFillFlag = 0;
  const frame = useCurrentFrame();
  const wordsCount = parseInt(
    interpolate(frame, [0, 70, 75, 90], [0, 12, 38, 40], {
      extrapolateRight: "clamp",
    })
  );
  const { width, height } = useVideoConfig();
  const colors = ["red", "white", "grey"];
  const rotate = (word) => word.angle;
  const fontSize = (word) => word.value;

  const fill = () => {
    colorFillFlag += 1;
    return colors[colorFillFlag % colors.length];
  };
  const generateWordTagData = (word, limit) => {
    let data = [];
    const values = [200, 150, 100, 50];
    const angles = [0, 90];
    for (let i = 0; i < limit; i++) {
      console.log(angles[i % angles.length])
      data.push({
        text: word.toUpperCase(),
        value: values[i % values.length],
        angle: angles[i % angles.length],
      });
    }
    return data;
  };
  const wordCloudStyle = {
    backgroundColor: "black",
  }

  return (
      <div style={wordCloudStyle}>
        <WordCloud
          width={width}
          height={height}
          data={generateWordTagData(headline, wordsCount)}
          spiral="rectangular"
          padding={8}
          font="arial"
          fontWeight={800}
          fontSize={fontSize}
          rotate={rotate}
          fill={fill}
          random={(n) => 0}
        />
      </div>
  );
}

export default SLWordCloud;
