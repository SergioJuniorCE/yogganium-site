<div class="container-xl px-4">
	<div class="row justify-content-center">
		<div class="col-lg-7">
			<div class="card shadow-lg border-0 rounded-lg mt-5">
				<div class="card-header justify-content-center">
					<h3 class="fw-light my-4">Create Account</h3>
				</div>
				<div class="card-body">
					<form action="?/register" method="POST">
						<div class="mb-3">
							<label class="small mb-1" for="email">Email</label>
							<input
								class="form-control"
								name="email"
								type="email"
								aria-describedby="emailHelp"
								placeholder="Enter email address"
							/>
						</div>
						<div class="row gx-3">
							<div class="col-md-6">
								<div class="mb-3">
									<label class="small mb-1" for="password">Password</label>
									<input
										class="form-control"
										name="password"
										type="password"
										placeholder="Enter password"
									/>
								</div>
							</div>
							<div class="col-md-6">
								<div class="mb-3">
									<label class="small mb-1" for="password2">Confirm Password</label>
									<input
										class="form-control"
										name="password2"
										type="password"
										placeholder="Confirm password"
									/>
								</div>
							</div>
						</div>
						<button class="btn btn-primary btn-block">Create Account</button>
					</form>
				</div>
				<div class="card-footer text-center">
					<div class="small">
						<a href="/login">Have an account? Go to login</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
