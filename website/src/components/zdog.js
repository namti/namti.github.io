import React, { useEffect } from 'react';
import Zdog from 'zdog';

const ZDog = (props) => {

	const illo = new Zdog.Illustration({
		element: '.zdog-canvas',
	});

	useEffect(() => {

		new Zdog.Ellipse({
			addTo: illo, 
			diameter: 80,
			stroke: 20,
			color: '#f0f',
		});

		illo.updateRenderGraph();
		animate();

	}, []);

	const animate = () => {
		illo.rotate.y += 0.03;
		illo.updateRenderGraph();
		requestAnimationFrame(animate);
	}

	return (
		<canvas class="zdog-canvas" width="240" height="240"></canvas>
	)
};

export default ZDog;

ZDog.defaultProps = {
	rotateX: 0,
	rotateY: 0,
	rotateZ: 0,
};
