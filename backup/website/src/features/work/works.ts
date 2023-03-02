import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	loadWorksAsync,
} from './workSlice';

export function Works(){

	const works = useSelector((state) => state.work.works);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadWorksAsync());
	}, []);

	useEffect(() => {
		console.log('works changed', works);
	}, [ works ]);

	return (
		<>
			<h1>Works</h1>
			{
				works.map((work, key) => (
					<div key={ `work_${key}` }>
						<h5>{ work?.name }</h5>
						<div>{ work?.description }</div>
					</div>
				))
			}
		</>
	);
}
