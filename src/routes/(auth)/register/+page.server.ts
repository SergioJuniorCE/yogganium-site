import { AuthApiError } from '@supabase/supabase-js';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const { email, password, password2 } = Object.fromEntries(await request.formData());

		if (password !== password2) {
			return fail(400, {
				error: 'Passwords do not match'
			});
		}

		const { error: err } = await locals.sb.auth.signUp({
			email: email as string,
			password: password as string
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid email or password'
				});
			}
			return fail(500, {
				error: 'Server error. Please try again later.'
			});
		}

		throw redirect(303, '/');
	}
};
