import React from 'react';
import PropTypes from 'prop-types';
import { 
	Anchor,
	Illustration, 
	Ellipse, 
	Shape, 
	Rect,
	RoundedRect,
} from 'react-zdog';
import Zdog from 'zdog';

const ControllerCase = (props) => (
	<RoundedRect
		{ ...{
			stroke: props.stroke,
				color: props.strokeColor,
				width: 192,
				height: 104,
				cornerRadius: 192,
				...props.shapeProps || {},
		} }
	/>
)

const Button = (props) => (
	<Ellipse
		color={ props.strokeColor }
		stroke={ props.stroke }
		diameter={ 40 }

		// { ...{
		// 	diameter: 32,
		// 	stroke: props.stroke,
		// 	color: props.strokeColor, 
		// 		...props.shapeProps || {},
		// } }
	/>
)

const IconGame = (props) => {
	const TAU = Zdog.TAU;
	const guidelineSize = 128000;

	return (
		<div style={ { width: props.width, height: props.height } } className={ props.className }>
			<Illustration zoom={ 1 } dragRotate>
				<Anchor translate={ { y: 24 } }>
					{
						props.showGuideline &&
							<Anchor>
								{/* guideline x */}
								<Shape
									color="#00f"
									path={ [
										{ x: -guidelineSize },
											{ x:  guidelineSize },
									] }
								/>
								{/* guideline y */}
								<Shape
									color="#0f0"
									path={ [
										{ y: -guidelineSize },
											{ y:  guidelineSize },
									] }
								/>
								{/* guideline z */}
								<Shape
									color="#f00"
									path={ [
										{ z: -guidelineSize },
											{ z:  guidelineSize },
									] }
								/>
								{/* ground */}
								<Rect 
									color="#fff0"
									backface="rgba(0,0,0,.35)"
									fill
									width={ guidelineSize }
									height={ guidelineSize }
									rotate={ { x: TAU / 4 } }
								/>
							</Anchor>
					}

					<Anchor translate={ { x: 44, z: 32 } }>
						<Ellipse diameter={ 24 } stroke={ props.stroke } color={ props.strokeColor } translate={ { x: -14, y: 14 } } />
						<Ellipse diameter={ 24 } stroke={ props.stroke } color={ props.strokeColor } translate={ { x: 14, y: -14 } } />
					</Anchor>

					{/* cross button */}
					<Shape
						stroke={ props.stroke }
						color={ props.strokeColor }
						translate={ { z: 32, x: -44 } }
						path={ [
							{ x: 8, y: 8 },
							{ x: 24, y: 8 },
							{ x: 24, y: -8 },
							{ x: 8, y: -8 },
							{ x: 8, y: -24 },
							{ x: -8, y: -24 },
							{ x: -8, y: -8 },
							{ x: -24, y: -8 },
							{ x: -24, y: 8 },
							{ x: -8, y: 8 },
							{ x: -8, y: 24 },
							{ x: 8, y: 24 },
						] }
					/>

					{/* cable */}
					<Shape 
						stroke={ props.stroke }
						color={ props.strokeColor }
						closed={ false }
						path={ [
							{ x: 0, y: 0 },
							{ bezier: [
								{ x: 0, y: -24 }, // start control point
								{ x: 32, y: -24 }, // end control point
								{ x: 32, y: -48 },
							] },
						] }
						translate={ { y: -52 } }
					/>

					<Anchor>
						{/* front face */}
						<ControllerCase 
							{ ...{ 
								...props, 
									shapeProps: { 
										translate: { z: 16 },
									} 
							} }
						/>

						{/* back face */}
						<ControllerCase 
							{ ...{ 
								...props, 
									shapeProps: { 
										translate: { z: -16 },
									} 
							} }
						/>

						{/* strut top left */}
						<Shape 
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: -44, y: -52, z: 16 },
								{ x: -44, y: -52, z: -16 },
							] }
							closed={ false }
						/>

						{/* strut top right */}
						<Shape 
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: 44, y: -52, z: 16 },
								{ x: 44, y: -52, z: -16 },
							] }
							closed={ false }
						/>

						{/* strut bottom left */}
						<Shape 
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: -44, y: 52, z: 16 },
								{ x: -44, y: 52, z: -16 },
							] }
							closed={ false }
						/>

						{/* strut top right */}
						<Shape 
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: 44, y: 52, z: 16 },
								{ x: 44, y: 52, z: -16 },
							] }
							closed={ false }
						/>
					</Anchor>

				</Anchor>
			</Illustration>
		</div>
	)
}

export default IconGame;

IconGame.defaultProps = {
	strokeColor: "#373737",
	stroke: 8,
	width: 256,
	height: 256,
	className: '',
	showGuideline: false,
};

IconGame.propTypes = {
	strokeColor: PropTypes.string,
	stroke: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
	showGuideline: PropTypes.bool,
};
