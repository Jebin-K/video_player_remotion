import {Composition} from 'remotion';
import {SaveBigTemplate} from './index.jsx';
// Each <Composition> is an entry in the sidebar!

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id="SaveBigTemplate"
				component={SaveBigTemplate}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
				// width={1080}
				// height={1920}
			/>
		</>
	);
};
