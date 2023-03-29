import React, { forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { 
	Anchor,
	Illustration, 
	Ellipse, 
	Shape, 
	Rect,
} from 'react-zdog';
import Zdog from 'zdog';
import CoordinateSpace from './coordinate-space';
import { 
	defaultStroke,
	defaultStrokeColor,
} from './constants';

const IconBicycle = forwardRef((props, ref) => {

	useImperativeHandle(ref, () => ({
	}), []);

	const TAU = Zdog.TAU;

	return (
		<div style={ { width: props.width, height: props.height } } className={ props.className } ref={ ref }>
			<Illustration zoom={ props.zoom } dragRotate={ props.dragRotate }>
				<Anchor translate={ { y: 80 } }>
					<CoordinateSpace show={ props.showCoordinateSpace } size={ props.width > props.height ? props.width : props.height } />

					<Anchor>
						<Shape
							color={ props.strokeColor }
							stroke={ props.stroke }
							path={ [
								{ x: 72, y: -72 },
									{ x: 70, y: -88 },
									{ x: 64, y: -156 },
									{ x: 64, y: -156, z: 48 },
									{ x: 80, y: -156, z: 48 },
									{ x: 64, y: -156, z: 48 },
									{ x: 64, y: -156 },
									{ x: 64, y: -156, z: -48 },
									{ x: 80, y: -156, z: -48 },
							] }
							closed={ false }
						/>

						{/* front fork */}
						<Shape 
							color={ props.strokeColor }
							stroke={ props.stroke }
							path={ [
								{ x: 88, y: -32, z: 8 },
									{ x: 72, y: -72 },
									{ x: 88, y: -32, z: -8 },
							] }
							closed={ false }
						/>
					</Anchor>

					{/* rear fork */}
					<Shape 
						color={ props.strokeColor }
						stroke={ props.stroke }
						path={ [
							{ x: -88, y: -32, z: 8 },
								{ x: -40, y: -48 },
								{ x: -88, y: -32, z: -8 },
						] }
						closed={ false }
					/>

					{/* transmission */}
					<Anchor translate={ { x: -16, y: -48 } } rotate={ { z: TAU / 8 } }>

						{/* cog */}
						<Ellipse
							color={ props.strokeColor }
							stroke={ props.stroke }
							diameter={ 40 }
							translate={ { z: 8 } }
						/>

						{/* crank */}
						<Shape 
							color={ props.strokeColor }
							stroke={ props.stroke }
							path={ [
								{ y: -36, z: 24 },
									{ y: -36, z: 12 },
									{ y: 0, z: 12 },
									{ y: 0, z: -12 },
									{ y: 36, z: -12 },
									{ y: 36, z: -24 },
							] }
							closed={ false } 
						/>

					</Anchor>

					{/* middle frame: connector */}
					<Shape 
						color={ props.strokeColor }
						stroke={ props.stroke }
						path={ [
							{ x: -40, y: -48 },
								{ x: -16, y: -48 },
								{ x: 0, y: -72 },
						] }
						closed={ false }
					/>

					{/* middle frame: beam */}
					<Shape 
						color={ props.strokeColor }
						stroke={ props.stroke }
						path={ [
							{ x: -22, y: -72 },
								{ x: 70, y: -80 },
						] }
						closed={ false }
					/>

					{/* seat pole */}
					<Shape 
						color={ props.strokeColor }
						stroke={ props.stroke }
						path={ [
							{ x: -16, y: -48 },
								{ x: -44, y: -148 },
								{ x: -24, y: -156 },
								{ x: -56, y: -158, z: 12 },
								{ x: -24, y: -156 },
								{ x: -56, y: -158, z: -12 },
								{ x: -56, y: -158, z: 12 },
						] }
						closed={ false }
					/>

					{/* wheel rear */}
					<Ellipse 
						diameter={ 64 }
						stroke={ props.stroke }
						color={ props.strokeColor }
						translate={ { x: -88, y: -32 } }
					/>

					{/* wheel front */}
					<Ellipse 
						diameter={ 64 }
						stroke={ props.stroke }
						color={ props.strokeColor }
						translate={ { x: 88, y: -32 } }
					/>
				</Anchor>
			</Illustration>
		</div>
	)
})

export default IconBicycle;

IconBicycle.displayName = "IconBicycle";

IconBicycle.defaultProps = {
	dragRotate: false,
	zoom: 1,
	strokeColor: defaultStrokeColor,
	stroke: defaultStroke,
	width: 256,
	height: 256,
	className: '',
	showCoordinateSpace: false,
};

IconBicycle.propTypes = {
	dragRotate: PropTypes.bool,
	zoom: PropTypes.number,
	strokeColor: PropTypes.string,
	stroke: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
	showCoordinateSpace: PropTypes.bool,
};
