import type { PageServerLoad } from './$types';

export const load = (async () => {
	try {
		const res = await fetch('https://dummyjson.com/products');
		const { products } = await res.json();

		return {
			products
		};
	} catch (err) {
		return {
			products: []
		};
	}
}) satisfies PageServerLoad;
