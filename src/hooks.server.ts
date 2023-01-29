import '$lib/supabase';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';
import { routes } from './lib/routes';

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event);
	event.locals.sb = supabaseClient;
	event.locals.session = session;

	const pathname = event.url.pathname;

	if (
		(
			!pathname.startsWith(routes.auth.forgotPassword) ||
			!pathname.startsWith(routes.auth.login) ||
			!pathname.startsWith(routes.auth.register) ||
			!pathname.startsWith(routes.auth.logout)
		) && !event.locals.session && !pathname.startsWith(pathname)
	) {
		throw redirect(303, '/login');
	}

	return resolve(event);
};
