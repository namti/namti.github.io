import React from 'react';
import PropTypes from 'prop-types';
import { 
	Anchor,
	Box,
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

const Case = (props) => (
	<Anchor { ...props.anchorProps }>

		{
			props.showLines &&
				<Anchor>
					<Shape
						stroke={ props.stroke }
						color={ props.strokeColor }
						path={ [
							{ x: -24, y: -32 },
								{ x: -24, y: 32 },
						] }
						closed={ false }
					/>

					<Shape
						stroke={ props.stroke }
						color={ props.strokeColor }
						path={ [
							{ x: 0, y: -32 },
								{ x: 0, y: 32 },
						] }
						closed={ false }
					/>

					<Shape
						stroke={ props.stroke }
						color={ props.strokeColor }
						path={ [
							{ x: 24, y: -32 },
								{ x: 24, y: 32 },
						] }
						closed={ false }
					/>
				</Anchor>
		}

		<RoundedRect 
			{ ...{
				stroke: props.stroke,
					color: props.strokeColor,
					width: 96,
					height: 104,
					cornerRadius: 16,
			} }
		/>
	</Anchor>
)

const Wheel = (props) => (
	<Anchor { ...props.anchorProps }>
		<Ellipse 
			{ ...{
				stroke: props.stroke,
					color: props.strokeColor,
					diameter: 16,
			} }
		/>
	</Anchor>
)

const IconSuitcase = (props) => {

	return (
		<div style={ { width: props.width, height: props.height } } className={ props.className }>
			<Illustration zoom={ props.zoom } dragRotate={ props.dragRotate }>
				<Anchor 
					translate={ { y: 72 } } 
				>
					<CoordinateSpace show={ props.showCoordinateSpace } size={ props.width > props.height ? props.width : props.height } />

					{/* handle */}
					<Shape 
						stroke={ props.stroke }
						color={ props.strokeColor }
						translate={ { y: -140, z: -24 } }
						path={ [
							{ x: -16, y: 0 },
								{ x: -16, y: -14 },
								{ arc: [
									{ x: -16, y: -20 },
									{ x: -10, y: -20 },
								] },
								{ x: 10, y: -20 },
								{ arc: [
									{ x: 16, y: -20 },
									{ x: 16, y: -14 },
								] },
								{ x: 16, y: 0 },
						] } 
						closed={ false }
					/>

					{/* case body */}
					<Anchor translate={ { y: -76 } }>

						{/* struts */}
						<Shape
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: -44, y: -46, z: 24 },
									{ x: -44, y: -46, z: -24 },
							] }
						/>
						<Shape
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: 44, y: -46, z: 24 },
									{ x: 44, y: -46, z: -24 },
							] }
						/>
						<Shape
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: -44, y: 46, z: 24 },
									{ x: -44, y: 46, z: -24 },
							] }
						/>
						<Shape
							stroke={ props.stroke }
							color={ props.strokeColor }
							path={ [
								{ x: 44, y: 46, z: 24 },
									{ x: 44, y: 46, z: -24 },
							] }
						/>

						<Case 
							{ ...{ 
								...props, 
									anchorProps: { 
										translate: { z: 24 },
									},
									showLines: true,
							} }
						/>

						<Case 
							{ ...{ 
								...props, 
									anchorProps: { 
										translate: { z: -24 },
									},
							} }
						/>

					</Anchor>

					{/* wheels */}
					<Wheel { ...{ ...props, anchorProps: { translate: { x: -48, y: -8, z: 24 } } } } />
					<Wheel { ...{ ...props, anchorProps: { translate: { x: -48, y: -8, z: -24 } } } } />

					<Wheel { ...{ ...props, anchorProps: { translate: { x: 32, y: -8, z: 24 } } } } />
					<Wheel { ...{ ...props, anchorProps: { translate: { x: 32, y: -8, z: -24 } } } } />

				</Anchor>
			</Illustration>
		</div>
	)
}

export default IconSuitcase;

IconSuitcase.defaultProps = {
	dragRotate: false,
	zoom: 1,
	strokeColor: defaultStrokeColor,
	stroke: defaultStroke,
	width: 256,
	height: 256,
	className: '',
	showCoordinateSpace: false,
};

IconSuitcase.propTypes = {
	dragRotate: PropTypes.bool,
	zoom: PropTypes.number,
	strokeColor: PropTypes.string,
	stroke: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	className: PropTypes.string,
	showCoordinateSpace: PropTypes.bool,
};
