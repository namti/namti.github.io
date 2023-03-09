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
import CoordinateSpace from './coordinate-space';
import { 
	defaultStroke,
	defaultStrokeColor,
} from './constants';

const TAU = Zdog.TAU;

const FireWood = (props) => (
	<Anchor rotate={ { y: props.anchorRotate } }>
		<Shape 
			{ ...{
				stroke: props.stroke,
					color: props.strokeColor,
					width: 192,
					height: 104,
					cornerRadius: 192,
					...props.shapeProps || {},
			} }
			path={ [
				{ x: 0, y: 0 },
					{ x: 16, y: 8 },
			] }
			translate={ { z: 8 } }
		/>
	</Anchor>
)

const IconCamp = (props) => {

	return (
		<div style={ { width: props.width, height: props.height } } className={ props.className }>
			<Illustration zoom={ props.zoom } dragRotate={ props.dragRotate }>
				<Anchor 
					translate={ { y: 32 } } 
					rotate={ { x: -0.23, y: 0.41 } } // rotate camera
				>
					<CoordinateSpace show={ props.showCoordinateSpace } size={ props.width > props.height ? props.width : props.height } />

					{/* campfire */}
					<Anchor
						translate={ { x: 96, z: 96 } }
					>
						{/* fire */}
						<Shape
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: 0, y: 0 },
									{ bezier: [
										{ x: -4, y: 0 },
										{ x: -20, y: 0 },
										{ x: -16, y: -20 },
									] },
								{ x: -12, y: -28 },
								{ x: -8, y: -20 },
								{ x: 0, y: -36 },
								{ x: 8, y: -16 },
								{ x: 12, y: -28 },
								{ x: 16, y: -20 },
									{ bezier: [
										{ x: 20, y: 0 },
										{ x: 4, y: 0 },
										{ x: 0, y: 0 },
									] },
							] }
							translate={ { y: -8 } }
							rotate={ { y: TAU / -8 } }
						/>

						{/* firewood */}
						<FireWood anchorRotate={ TAU / 1 } { ...{ ...props, shapeProps: { rotate: { y: TAU / 4 } } } } />
						<FireWood anchorRotate={ TAU / 4 } { ...{ ...props, shapeProps: { rotate: { y: TAU / 4 } } } } />
						<FireWood anchorRotate={ TAU / 2 } { ...{ ...props, shapeProps: { rotate: { y: TAU / 4 } } } } />
						<FireWood anchorRotate={ TAU / -4 } { ...{ ...props, shapeProps: { rotate: { y: TAU / 4 } } } } />
						<FireWood anchorRotate={ TAU / 8 } { ...{ ...props, shapeProps: { rotate: { y: TAU / 4 } } } } />
						<FireWood anchorRotate={ TAU / -8 } { ...{ ...props, shapeProps: { rotate: { y: TAU / 4 } } } } />
						<FireWood anchorRotate={ TAU / 2.65 } { ...{ ...props, shapeProps: { rotate: { y: TAU / 4 } } } } />
						<FireWood anchorRotate={ TAU / -2.65 } { ...{ ...props, shapeProps: { rotate: { y: TAU / 4 } } } } />
					</Anchor>

					{/* tent */}
					<Anchor translate={ { x: -56, z: -56 } }>

						{/* window */}
						<Shape 
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: 34, y: -34, z: 24 },
								{ x: 16, y: -60, z: 24 },
								{ x: 16, y: -60, z: -24 },
								{ x: 34, y: -34, z: -24 },
							] }
						/>

						{/* tent */}
						<Shape 
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								// line 1
								{ x: 64, y: 0, z: 64, },
									{ bezier: [
										{ x: 48, y: -16, z: 64, },
										{ x: 16, y: -52, z: 64, },
										{ x: 0, y: -96, z: 64, },
									] },

									// line 2
									{ x: 0, y: -96, z: 64, },
									{ bezier: [
										{ x: -16, y: -52, z: 64, },
										{ x: -48, y: -16, z: 64, },
										{ x: -64, y: 0, z: 64, },
									] },

									// line 3
									{ move: { x: 64, y: 0, z: -64, } },
									{ bezier: [
										{ x: 48, y: -16, z: -64, },
										{ x: 16, y: -52, z: -64, },
										{ x: 0, y: -96, z: -64, },
									] },

									// line 4
									{ x: 0, y: -96, z: -64, },
									{ bezier: [
										{ x: -16, y: -52, z: -64, },
										{ x: -48, y: -16, z: -64, },
										{ x: -64, y: 0, z: -64, },
									] },

									// beam
									{ move: { x: 0, y: -96, z: 64, } },
									{ x: 0, y: -96, z: -64, },

									// door
									{ move: { x: 0, y: -96, z: 64, } },
									{ x: 0, y: 0, z: 64, },
							] }
							closed={ false }
						/>

						{/* base */}
						<Rect
							width={ 128 }
							height={ 128 }
							stroke={ props.stroke }
							color={ props.strokeColor }
							rotate={ { x: TAU / 4 } }
						/>

						{/* nails */}
						<Anchor>

							{/* nail 1 */}
							<Shape 
								stroke={ props.stroke }
								color={ props.strokeColor }
								path={ [
									{ x: 64, z: 64 },
									{ x: 68, z: 68, y: -10 },
								] }
							/>

							{/* nail 2 */}
							<Shape 
								stroke={ props.stroke }
								color={ props.strokeColor }
								path={ [
									{ x: -64, z: 64 },
									{ x: -68, z: 68, y: -10 },
								] }
							/>

							{/* nail 3 */}
							<Shape 
								stroke={ props.stroke }
								color={ props.strokeColor }
								path={ [
									{ x: 64, z: -64 },
									{ x: 68, z: -68, y: -10 },
								] }
							/>

							{/* nail 4 */}
							<Shape 
								stroke={ props.stroke }
								color={ props.strokeColor }
								path={ [
									{ x: -64, z: -64 },
									{ x: -68, z: -68, y: -10 },
								] }
							/>

						</Anchor>

					</Anchor>

				</Anchor>
			</Illustration>
		</div>
	)
}

export default IconCamp;

IconCamp.defaultProps = {
	dragRotate: false,
	zoom: 1,
	strokeColor: defaultStrokeColor,
	stroke: defaultStroke,
	width: 256,
	height: 256,
	className: '',
	showCoordinateSpace: false,
};

IconCamp.propTypes = {
	dragRotate: PropTypes.bool,
	zoom: PropTypes.number,
	strokeColor: PropTypes.string,
	stroke: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
	showCoordinateSpace: PropTypes.bool,
};
