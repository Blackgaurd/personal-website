<script lang="ts">
    import { W_SM } from "../screen_widths";
	import { smooth_scroll } from "../utils";

	function close_burger_scroll(event: MouseEvent) {
		hamburger_open = false;
		smooth_scroll(event);
	}

	let scrollY: number;
	let innerHeight: number;
	let innerWidth: number;

	let hamburger_open = false;

	$: nav_opacity = hamburger_open ? 0 : Math.min(1, scrollY / innerHeight);
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

{#if innerWidth < W_SM}
	<!--mobile nav-->
	<nav
		class="w-full h-12 fixed {hamburger_open ? '' : 'shadow-md'} z-30"
		style="background-color: rgba(20,33,61,{nav_opacity});"
	>
		<div class="relative">
			<button
				class="absolute right-0 flex flex-col space-y-1.5 w-8 cursor-pointer m-3"
				on:click={() => (hamburger_open = !hamburger_open)}
			>
				<div
					class="w-full h-1 duration-200 rounded-full bg-accent"
					style="opacity: {hamburger_open ? 0 : 1};"
				/>
				<div class="relative">
					<div
						class="w-full h-1 duration-200 rounded-full bg-accent"
						style="rotate: {hamburger_open ? 45 : 0}deg;"
					/>
					<div
						class="absolute top-0 left-0 w-full h-1 duration-200 rounded-full bg-accent"
						style="rotate: {hamburger_open ? -45 : 0}deg;"
					/>
				</div>
				<div
					class="w-full h-1 duration-200 rounded-full bg-accent"
					style="opacity: {hamburger_open ? 0 : 1};"
				/>
			</button>
		</div>
		{#if hamburger_open}
			<div
				class="flex w-full h-screen duration-100 border-2 bg-dark-main bg-opacity-95 border-accent"
			>
				<div class="w-full m-auto">
					<div class="flex flex-col space-y-8">
						<div class="w-full">
							<h3 class="text-4xl font-semibold text-center text-accent">
								<a href="#home" class="nav-link" on:click={close_burger_scroll}>HOME</a>
							</h3>
						</div>
						<div class="w-full">
							<h3 class="text-4xl font-semibold text-center text-accent">
								<a href="#about" class="nav-link" on:click={close_burger_scroll}>ABOUT</a>
							</h3>
						</div>
						<div class="w-full">
							<h3 class="text-4xl font-semibold text-center text-accent">
								<a href="#projects" class="nav-link" on:click={close_burger_scroll}>PROJECTS</a>
							</h3>
						</div>
						<div class="w-full">
							<h3 class="text-4xl font-semibold text-center text-accent">
								<a href="resume.pdf" target="_blank" rel="noopener noreferrer" class="nav-link">
									RESUME
								</a>
							</h3>
						</div>
					</div>
					<div class="flex w-1/2 mx-auto mt-16 justify-evenly">
						<a href="https://github.com/Blackgaurd" target="_blank" rel="noopener noreferrer">
							<i class="duration-100 fa-3x text-accent fa-brands fa-square-github hover:scale-110" />
						</a>
						<a
							href="https://www.linkedin.com/in/bryan-deng-550414200/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="duration-100 fa-3x text-accent fa-brands fa-linkedin hover:scale-110" />
						</a>
						<a href="mailto://bryan.deng002@gmail.com">
							<i class="duration-100 fa-3x text-accent fa-solid fa-square-envelope hover:scale-110" />
						</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>
{:else}
	<!--desktop nav-->
	<nav class="fixed z-30 w-full shadow-md" style="background-color: rgba(20,33,61,{nav_opacity});">
		<div class="flex p-1 md:px-8 md:py-3">
			<div class="w-1/2">
				{#if scrollY === 0}
					<!--keep a ghost element to not mess with the spacing of the rest of nav-->
					<p class="hidden">Bryan Deng</p>
				{:else}
					<p class="p-2 md:text-lg md:p-3 text-accent" style="opacity: {nav_opacity};">
						<a href="#home" class="nav-link" on:click={smooth_scroll}>Bryan Deng</a>
					</p>
				{/if}
			</div>
			<div class="flex justify-end w-1/2 space-x-10 md:space-x-28">
				<p class="p-2 md:text-lg md:p-3 text-accent">
					<a href="#about" class="nav-link" on:click={smooth_scroll}>About</a>
				</p>
				<p class="p-2 md:text-lg md:p-3 text-accent">
					<a href="#projects" class="nav-link" on:click={smooth_scroll}>Projects</a>
				</p>
				<a
					href="resume.pdf"
					class="p-2 duration-75 rounded-md shadow-md md:text-lg md:p-3 text-dark-main bg-accent hover:shadow-sm"
					target="_blank"
					rel="noopener noreferrer"
					>Resume
				</a>
			</div>
		</div>
	</nav>
{/if}
