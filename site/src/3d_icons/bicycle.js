import React from 'react';
import PropTypes from 'prop-types';
import { 
	Anchor,
	Illustration, 
	Ellipse, 
	Shape, 
	Rect,
} from 'react-zdog';
import Zdog from 'zdog';

const IconBicycle = (props) => {
	const TAU = Zdog.TAU;
	const guidelineSize = 128000;

	return (
		<div style={ { width: props.width, height: props.height } } className={ props.className }>
			<Illustration zoom={ 1 } dragRotate>
				<Anchor translate={ { y: 88 } }>
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
					<Anchor translate={ { x: -16, y: -48 } } rotate={ { z: -45 } }>

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
								{ x: -44, y: -144 },
								{ x: -24, y: -156 },
								{ x: -64, y: -156, z: 8 },
								{ x: -24, y: -156 },
								{ x: -64, y: -156, z: -8 },
								{ x: -64, y: -156, z: 8 },
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
}

export default IconBicycle;

IconBicycle.defaultProps = {
	strokeColor: "#373737",
	stroke: 6,
	width: 256,
	height: 256,
	className: '',
	showGuideline: false,
};

IconBicycle.propTypes = {
	strokeColor: PropTypes.string,
	stroke: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
	showGuideline: PropTypes.bool,
};
