import React, { useEffect, useRef } from 'react';
import { Illustration, Anchor, Cylinder, useRender } from 'react-zdog';
// import { TimelineLite } from 'gsap';

const AnimatedCylinder = () => {
	const anchorRef = useRef();
	const cylinderRef = useRef();
	// const timeline = new TimelineLite();

	useRender(() => {
		// Rotate the cylinder
		// cylinderRef.current.rotate.y += 0.01;
	});

	// useEffect(() => {
	// 	// Create a GSAP timeline to animate the cylinder
	// 	timeline.to(cylinderRef.current.rotate, 1, { y: Math.PI * 2, repeat: -1 });
	// }, []);


	return (
		<div style={ { width: '300px', height: '300px' } }>
			{ console.log('cylinderRef', cylinderRef) }
			<h1>Cylinder</h1>

			<Illustration dragRotate={ true }>
				<Anchor ref={ anchorRef }>
					<Cylinder ref={ cylinderRef } diameter={100} length={100} color="#EA0" />
				</Anchor>
			</Illustration>
		</div>
	);
};

export default AnimatedCylinder;

