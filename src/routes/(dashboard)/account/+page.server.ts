import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
    const  { session } = locals;
    if (!session) {
        throw error(401, 'Unauthorized');
    }
    return {
        session
    };
}) satisfies PageServerLoad;