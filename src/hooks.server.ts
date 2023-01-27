import '$lib/supabase';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';
import { routes } from './lib/routes';

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event);
	event.locals.sb = supabaseClient;
	event.locals.session = session;

	const { dashboard } = routes;

	if (
		(
			event.url.pathname.startsWith(dashboard.dashboard) ||
			event.url.pathname.startsWith(dashboard.profile) ||
			event.url.pathname.startsWith(dashboard.products)
		) && !event.locals.session
	) {
		throw redirect(303, '/login');
	}

	return resolve(event);
};
