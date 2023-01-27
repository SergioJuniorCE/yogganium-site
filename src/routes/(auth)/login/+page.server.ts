// import type { PageServerLoad } from './$types';

import { AuthApiError } from "@supabase/supabase-js";
import { fail, redirect, type Actions } from "@sveltejs/kit";

// export const load = (async () => {
//     return {};
// }) satisfies PageServerLoad;

export const actions: Actions = {
    login: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());

        const { error: err } = await locals.sb.auth.signInWithPassword({
            email: body.email as string,
            password: body.password as string
        });

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'Invalid email or password'
                });
            }
            return fail(500, {
                error: 'Something went wrong logging you in.'
            });
        }
        throw redirect(303, '/');
    }
};