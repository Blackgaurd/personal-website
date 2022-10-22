<script lang="ts">
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

		<div class="flex px-8 py-12 shadow-inner bg-dark-main">
			<!--footer-->
			<div class="flex w-2/3">
				<div class="flex p-5 my-auto space-x-2">
					<span class="text-xl text-accent">Made by Bryan using</span>
					<img class="w-6 h-6" src="images/svelte.svg" alt="Svelte logo" />
					<img class="w-6 h-6" src="images/tailwind.svg" alt="TailwindCSS logo" />
					<img class="w-6 h-6" src="images/typescript.svg" alt="Typescript logo" />
				</div>
			</div>
			<div class="w-1/3">
				<div class="flex flex-col space-y-2">
					<a
						class="text-accent"
						href="https://github.com/Blackgaurd"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="scale-110 -translate-y-0.5 fa-brands fa-github" />
						<span class="text-lg nav-link">GitHub</span>
					</a>
					<a
						class="text-accent"
						href="https://www.linkedin.com/in/bryan-deng-550414200/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i class="scale-110 -translate-y-0.5 fa-brands fa-linkedin-in" />
						<span class="text-lg nav-link">LinkedIn</span>
					</a>
					<a class="text-accent" href="mailto://bryan.deng002@gmail.com">
						<i class="scale-110 -translate-y-0.5 fa-solid fa-envelope" />
						<span class="text-lg nav-link">bryan.deng002@gmail.com</span>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full h-0.5 bg-accent" />
	</div>
</main>

<style>
	.nav-link {
		padding-bottom: 2px;
		background: center bottom linear-gradient(#fca311, #fca311); /*accent*/
		background-size: 0% 2px;
		background-repeat: no-repeat;
		transition: all 0.2s;
	}

	.nav-link:hover {
		background-size: 100% 2px;
	}
</style>
