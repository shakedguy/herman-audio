import { useState } from 'react';
import firstAudio from './assets/file_example_MP3_700KB.mp3';
import secondAudio from './assets/sunflower-street-drumloop-85bpm-163900.mp3';

import AudioStripe from './AudioStripe';
import './App.css';

const colors = ['red', 'green', 'yellow', 'blue'];
const files = [firstAudio, secondAudio, firstAudio, secondAudio];

function App() {
	const [play, setPlay] = useState(false);
	const [loop, setLoop] = useState(false);

	const togglePlay = () => setPlay((p) => !p);
	const toggleLoop = () => setLoop((l) => !l);

	return (
		<>
			{files.map((file, index) => (
				<AudioStripe
					key={index}
					color={colors[index]}
					file={file}
					type='audio/mp3'
					isPlay={play}
					loop={loop}
				/>
			))}
			<button onClick={togglePlay}>{play ? 'Pause' : 'Play'}</button>
			<button onClick={toggleLoop}>{loop ? 'Stop Loop' : 'Loop'}</button>
		</>
	);
}

export default App;
