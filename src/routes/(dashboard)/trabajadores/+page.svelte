<script lang="ts">
	import { getDataFromRow } from '$lib/table-utils';
	import { h } from 'gridjs';
	import Gridjs from 'gridjs-svelte/gridjs.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const users = data.users;

	const columns = [
		{
			name: 'id',
			hidden: true
		},
		{
			id: 'image',
			name: 'Imagen',
			formatter: (cell: any, row: any) => {
				return h('img', {
					src: getDataFromRow(row, 1),
					className: 'img-fluid rounded-circle shadow-lg',
					style: 'width: 50px; height: 50px;'
				});
			},
			width: '12%'
		},
		{
			id: 'firstName',
			name: 'Nombres'
		},
		{
			id: 'lastName',
			name: 'Apellidos'
		},
		{
			id: 'phone',
			name: 'Teléfono'
		},
		// {
		// 	name: 'Departamento',
		// 	formatter: (cell: any, row: any) => {
		// 		return h(
		// 			'span',
		// 			{
		// 				className: 'badge bg-primary',
		// 				onClick: () => {
		// 					console.log(row);
		// 				}
		// 			},
		// 			"asd"
		// 		);
		// 	}
		// },
		{
			name: 'Acciones',
			formatter: (cell: any, row: any) => {
				return h(
					'button',
					{
						className: 'btn btn-primary btn-sm'
					},
					'Editar'
					// h('i', { className: 'fa-solid fa-pencil' })
				);
			},
			width: '15%'
		}
	];

	onMount(() => {
		console.log(users);
	});
</script>

<main>
	<header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
		<div class="container-fluid px-4">
			<div class="page-header-content pt-4">
				<div class="row align-items-center justify-content-between">
					<div class="col-auto mt-4">
						<h1 class="page-header-title">
							<div class="page-header-icon"><i class="fa-solid fa-person" /></div>
							Trabajadores
						</h1>
						<!-- <div class="page-header-subtitle">
							Regardless of screen size, this layout style will keep expanding to take up the whole
							width of the screen
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- Main page content-->
	<div class="container-fluid px-4">
		<div class="card mt-n10">
			<div class="card-header">Administra aquí a los trabajadores</div>
			<div class="card-body">
				<Gridjs {columns} data={users} width="200rem" search pagination sort />
			</div>
		</div>
	</div>
</main>
