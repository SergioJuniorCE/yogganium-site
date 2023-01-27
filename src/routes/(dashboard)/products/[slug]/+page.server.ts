import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const { slug } = params;
		if (!slug) {
			throw error(404, 'Slug is required');
		}
		const res = await fetch(`https://dummyjson.com/products/${slug}`);
		const product = await res.json();
        
		return {
			product
		};
	} catch (err) {
		return {
			product: null
		};
	}
}) satisfies PageServerLoad;
