import React from 'react';
import PropTypes from 'prop-types';
import { 
	Anchor,
	Shape, 
	Rect,
} from 'react-zdog';
import Zdog from 'zdog';

const CoordinateSpace = (props) => {
	const TAU = Zdog.TAU;
	if(props.show) return (
		<Anchor>
			{/* guideline x */}
			<Shape
				color="#00f"
				path={ [
					{ x: -props.size },
						{ x:  props.size },
				] }
			/>
			{/* guideline y */}
			<Shape
				color="#0f0"
				path={ [
					{ y: -props.size },
						{ y:  props.size },
				] }
			/>
			{/* guideline z */}
			<Shape
				color="#f00"
				path={ [
					{ z: -props.size },
						{ z:  props.size },
				] }
			/>
			{/* ground */}
			<Rect 
				color="rgba(255,0,0,.05)"
				backface="rgba(0,0,0,.35)"
				fill
				width={ props.size }
				height={ props.size }
				rotate={ { x: TAU / 4 } }
			/>
		</Anchor>
	)
}

export default CoordinateSpace;

CoordinateSpace.defaultProps = {
	show: false,
	size: 256,
};

CoordinateSpace.propTypes = {
	show: PropTypes.bool,
	size: PropTypes.number,
};
