<script lang='ts'>
	import { onMount } from "svelte";



	export let path: string;

	const baseUrl = '/account'
	const routes = [
		{
			name: 'Profile',
			href: `${baseUrl}/`
		},
		{
			name: 'Billing',
			href: `${baseUrl}/billing`
		},
		{
			name: 'Security',
			href: `${baseUrl}/security`
		},
		{
			name: 'Notifications',
			href: `${baseUrl}/notifications`
		}
	]

	onMount(() => {
		console.log('path', path)
	})
</script>

<nav class="nav nav-borders">
	{#each routes as route}
		<a class="nav-link {path === route.href ? 'active ms-0': ''}" href={route.href}>{route.name}</a>
	{/each}
	<!-- <a class="nav-link" href="/account/billing">Billing</a>
	<a class="nav-link" href="/account/security">Security</a>
	<a class="nav-link" href="/account/notifications">Notifications</a> -->
</nav>
