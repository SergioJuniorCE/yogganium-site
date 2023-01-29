<script lang="ts">
	import type { PageData } from './$types';
	import Grid from 'gridjs-svelte';
	import { h } from 'gridjs';
	import { goto } from '$app/navigation';
	import { getDataFromRow } from '$lib/table-utils';
	import type { OneDArray, TColumn } from 'gridjs/dist/src/types';

	export let data: PageData;
	const columns: OneDArray<TColumn> = [
		{
			id: 'id',
			name: 'ID',
			width: '6rem'
		},
		{
			name: 'Title'
		},
		{
			name: 'Description',
			width: '50%'
		},
		{
			name: 'Price'
		},
		{
			id: 'Actions',
			name: 'Actions',
			width: '10%',
			sort: { enabled: false },
			formatter(_cell: any, row: any, _column: any) {
				return h(
					'a',
					{ href: `/products/${row.cells[0].data}`, class: 'btn btn-primary' },

					h('i', { class: 'fa-solid fa-pen-to-square' })
				);
			}
		}
	];

	let limit: number = 10;
</script>

<header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
	<div class="container-xl px-4">
		<div class="page-header-content pt-4">
			<div class="row align-items-center justify-content-between">
				<div class="col-auto mt-4">
					<h1 class="page-header-title">
						<div class="page-header-icon"><i class="fa-solid fa-box" /></div>
						Productos
					</h1>
					<div class="page-header-subtitle">Manage your products</div>
				</div>
				<!-- <div class="col-12 col-xl-auto mt-4">Optional page header content</div> -->
			</div>
		</div>
	</div>
</header>
<!-- Main page content-->
<div class="container-xl px-4 mt-n10">
	<div class="card">
		<div class="card-header">Productos</div>
		<div class="card-body">
			Administra tus productos desde esta pagina
			<br />
			<Grid
				data={data.products}
				{columns}
				search
				sort
				pagination={{
					enabled: true,
					limit: limit,
					summary: true
				}}
				autoWidth
			/>
		</div>
	</div>
</div>

<style global>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
</style>
