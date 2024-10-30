import { useEffect, useState } from 'react'
import WebGPU from "three/examples/jsm/capabilities/WebGPU.js";

import './App.css'
import { Demo } from './Demo';
import ThreeCanvas from './components/threeCanvas';

function App() {

	const [isDemoReady, setIsDemoReady] = useState(false);
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const [isGPUAvailable, setIsGPUAvailable] = useState(WebGPU.isAvailable());


	useEffect(() => {

		document.body.classList.add('loading');

		const interval = setInterval(() => {
			if (Demo.instance != null && Demo.firstRenderDone) {
				setIsDemoReady(true);
				clearInterval(interval);
				document.body.classList.remove('loading');
			}
		}, 100);
	}, []);



	const toggleTheme = () => {
		setIsDarkTheme(prevTheme => !prevTheme);
		document.documentElement.setAttribute('data-theme', isDarkTheme ? 'light' : 'dark');

		Demo.setTheme(isDarkTheme ? 'light' : 'dark');

	};

	return (
		<>
			<header className="frame">
				<h1 className="frame__title">Interactive 3D with Three.js <a href="https://github.com/KuldeepMahto07" target="_blank">Ned_Flander</a></h1>
				<a className="frame__back" href="https://zingy-longma-7d1632.netlify.app/">Demo 1</a>
				<a className="frame__archive" href="">Demo 2</a>
				<a className="frame__github" href="https://github.com/KuldeepMahto07">GitHub</a>
				<nav className="frame__tags">
					<a href="">#3d</a>
					<a href="">#three.js</a>
					<a href="">#webgpu</a>
				</nav>
			</header>

			<div className="content">
				<div className='demo__infos__container'>
					{isGPUAvailable &&
						<div className='demo__infos'>
							{!isDemoReady &&
								<>
									<h1 className="frame__title">Please wait, loading & initializing ...</h1>
									<div className="loader-container">
										<span className="loader"></span>
									</div>
								</>
							}
							{isDemoReady &&
								<>
									<div>
										<h1 className="frame__title">Controls :</h1>
										<ul>
											<li>Click/Touch and drag to rotate the camera</li>
											<li>Scroll/Pinch to zoom in/out</li>
											<li>Right click/Two fingers drag to pan</li>
										</ul>
									</div>
									<div className='theme-toggle'>
										<label className='switch'>
											<input type='checkbox' onChange={toggleTheme} checked={isDarkTheme} />
											<span className='slider round'></span>
										</label>
										<span className='slider-label'>Switch to {!isDarkTheme ? 'dark mode' : 'light mode'}</span>
									</div>
								</>
							}
						</div>
					}

					{!isGPUAvailable &&
						<div className='demo__infos'>
							<h1 className="frame__title">WebGPU not available</h1>
							<p>WebGPU is not available on your device or browser. Please use a device or browser that supports WebGPU.</p>
						</div>
					}
				</div>
				<ThreeCanvas />

			</div>



		</>
	)
}

export default App
