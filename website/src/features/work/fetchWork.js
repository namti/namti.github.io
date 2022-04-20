import { data } from '../../data/data';

export const fetchWorks = () => {
	return new Promise((resolve, reject) => {
		resolve(data?.works || []);
	});
}
