<template>
	<div class="wrapper">
		<div class="sidenav">
			<router-link :to="{ name: 'home' }" class="logo">
				<span class="d-none d-md-inline">MundoFans</span>
				<span class="d-inline d-md-none">MF</span>
			</router-link>

			<ul class="nav nav-pills flex-column mb-auto">
				<li class="nav-item">
					<router-link :to="{ name: 'home' }" class="nav-link" aria-current="page">
						<i class="bi bi-house-door"></i>

						<span class="nav-link-text">
							Home
						</span>
					</router-link>
				</li>

				<li class="nav-item">
					<router-link :to="{ name: 'community' }" class="nav-link">
						<i class="bi bi-laptop"></i>

						<span class="nav-link-text">
							Community
						</span>
					</router-link>
				</li>

				<li class="nav-item">
					<router-link :to="{ name: 'shop' }" class="nav-link">
						<i class="bi bi-cart"></i>

						<span class="nav-link-text">
							Shop
						</span>
					</router-link>
				</li>

				<li class="nav-item">
					<router-link :to="{ name: 'explore' }" class="nav-link">
						<i class="bi bi-binoculars"></i>

						<span class="nav-link-text">
							Explore
						</span>
					</router-link>
				</li>
			</ul>

			<ul class="nav nav-pills flex-column mt-auto">
				<li class="nav-item user-link">
					<a href="" class="nav-link">
						<i class="bi bi-person-circle"></i>

						<span class="nav-link-text">
							Gonza Lopez
						</span>
					</a>
				</li>
			</ul>
		</div>

		<main class="content">
			<nav class="navbar navbar-expand-lg navbar-dark">
				<div class="container-fluid">
					<ul class="navbar-nav ms-auto flex-row">
						<li class="nav-item">
							<a href="" class="nav-link">
								<i class="bi bi-bell"></i>
							</a>
						</li>

						<li class="nav-item">
							<a href="" class="nav-link">
								<i class="bi bi-grid-3x3-gap-fill"></i>
							</a>
						</li>

						<li class="nav-item">
							<a href="" class="nav-link">
								<i class="bi bi-gear"></i>
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<div class="p-3 w-100">
				<router-view />
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'App'
})
</script>