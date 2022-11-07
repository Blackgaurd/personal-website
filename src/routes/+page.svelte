<script lang="ts">
	import Navbar from "../components/Navbar.svelte";
	import HomePage from "../components/HomePage.svelte";
	import AboutPage from "../components/AboutPage.svelte";
	import ProjectsPage from "../components/ProjectsPage.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<main class="relative flex flex-col h-screen">
	<!--navbar-->
	<Navbar />

	<!--main content-->
	<div class="flex flex-col">
		<HomePage />

		<AboutPage />

		<ProjectsPage />

		<Footer />
	</div>
</main>
