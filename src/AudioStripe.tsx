import { useRef, useEffect, useState } from 'react';

export default function AudioStripe({ color, file, type, isPlay }) {
	const ref = useRef();
	const [mute, setMute] = useState(false);

	useEffect(() => {
		console.log(isPlay);

		if (isPlay) {
			ref?.current?.play();
		} else {
			ref?.current?.pause();
		}
	}, [isPlay]);

	const toggleMute = () => setMute((m) => !m);

	return (
		<div
			className='audio-stripe'
			style={{
				backgroundColor: color,
				width: '80vw',
				height: '3rem',
			}}
		>
			<audio
				ref={ref}
				src={file}
				type={type}
				muted={mute}
			></audio>
			<button
				className='btn-mute'
				onClick={toggleMute}
			>
				{mute ? 'Unmute' : 'Mute'}
			</button>
		</div>
	);
}
