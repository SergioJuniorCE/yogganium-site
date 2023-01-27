<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const product = data.product;
</script>

<main>
	<header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
		<div class="container-xl px-4">
			<div class="page-header-content pt-4">
				<div class="row align-items-center justify-content-between">
					<div class="col-auto mt-4">
						<h1 class="page-header-title">
							<div class="page-header-icon"><i data-feather="file" /></div>
							Blank Starter
						</h1>
						<div class="page-header-subtitle">
							Use this blank page as a starting point for creating new pages inside your project!
						</div>
					</div>
					<div class="col-12 col-xl-auto mt-4">Optional page header content</div>
				</div>
			</div>
		</div>
	</header>
	<!-- Main page content-->
	<div class="container-xl px-4 mt-n10">
		<div class="card">
			<div class="card-header">Example Card</div>
			<div class="card-body">
				<!-- id, title, description, price, stock -->
				<div class="row">
					<div class="col-4">
						<img class="img-thumbnail" src={product.thumbnail} alt={product.title} />
					</div>
					<div class="col-8">
						<div class="row">
							<div class="col-12 col-md-6 mb-3">
								<div class="form-group">
									<label for="id">ID</label>
									<p class="form-control" id="id">{product.id}</p>
								</div>
							</div>
							<div class="col-12 col-md-6 mb-3">
								<div class="form-group">
									<label for="title">Titulo</label>
									<input type="text" class="form-control" id="title" value={product.title} />
								</div>
							</div>
							<div class="col-12 col-md-6 mb-3">
								<div class="form-group">
									<label for="title">description</label>
									<input
										type="text"
										class="form-control"
										id="description"
										value={product.description}
									/>
								</div>
							</div>
							<div class="col-12 col-md-6 mb-3">
								<div class="form-group">
									<label for="title">price</label>
									<input type="text" class="form-control" id="price" value={product.price} />
								</div>
							</div>
							<div class="col-12 col-md-6 mb-3">
								<div class="form-group">
									<label for="title">stock</label>
									<input type="text" class="form-control" id="stock" value={product.stock} />
								</div>
							</div>
              <button type="button" class="btn btn-primary ml-3">Guardar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>
