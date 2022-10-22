<script lang="ts">
  import Footer from './Footer.svelte';

	import ProjectsPage from "./ProjectsPage.svelte";
	import AboutPage from "./AboutPage.svelte";
	import HomePage from "./HomePage.svelte";
	import Navbar from "./Navbar.svelte";
</script>

<main class="relative flex flex-col h-screen">
	<!--navbar-->
	<Navbar />

	<!--main content-->
	<div class="flex flex-col">
		<HomePage />

		<AboutPage />

		<ProjectsPage />

		<Footer></Footer>
	</div>
</main>
