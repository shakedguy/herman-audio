import { useState } from 'react';
import firstAudio from './assets/file_example_MP3_700KB.mp3';
import secondAudio from './assets/sunflower-street-drumloop-85bpm-163900.mp3';

import AudioStripe from './AudioStripe';
import './App.css';

const colors = ['red', 'green', 'yellow', 'blue'];
const files = [firstAudio, secondAudio, firstAudio, secondAudio];

function App() {
	const [play, setPlay] = useState(false);

	const togglePlay = () => setPlay((p) => !p);

	return (
		<>
			{files.map((file, index) => (
				<AudioStripe
					key={index}
					color={colors[index]}
					file={file}
					type='audio/mp3'
					isPlay={play}
				/>
			))}
			<button onClick={togglePlay}>{play ? 'Pause' : 'Play'}</button>
		</>
	);
}

export default App;
