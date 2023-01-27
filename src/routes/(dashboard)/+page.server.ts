import type { PageServerLoad } from './$types';
// export const ssr = false;
export const load = (async () => {
	const res = await fetch('https://dummyjson.com/users');
	const { users } = await res.json();
	return {
		users
	};
}) satisfies PageServerLoad;
