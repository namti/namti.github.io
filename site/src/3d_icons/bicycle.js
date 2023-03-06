import React from 'react';
import { 
	Anchor,
	Illustration, 
	Ellipse, 
	Shape, 
	RoundedRect, 
	useRender,nn
} from 'react-zdog';

const IconBicycle = (props) => {

	return (
		<div style={ { width: props.width, height: props.height } } className={ props.className }>
			<Illustration zoom={ 1 } dragRotate translate={ { y: 88 } }>
				<Anchor>
					{
						props.showGuidline &&
							<Anchor>
								{/* guideline */}
								<Shape
									color="#f0f"
									path={ [
										{ x: -128 },
											{ x:  128 },
									] }
								/>
								{/* guideline */}
								<Shape
									color="#f0f"
									path={ [
										{ y: -128 },
											{ y:  128 },
									] }
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

						{/* pedal */}
						<Shape 
							color={ props.strokeColor }
							stroke={ props.stroke }
							path={ [
								{ y: -32, z: 24 },
									{ y: -32, z: 12 },
									{ y: 0, z: 12 },
									{ y: 0, z: -12 },
									{ y: 32, z: -12 },
									{ y: 32, z: -24 },
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
								{ x: 72, y: -80 },
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
	width: 512,
	height: 512,
	className: 'bg-info',
	showGuidline: false,
};
