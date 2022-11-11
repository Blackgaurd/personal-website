<script lang="ts">
	import { W_MD } from "../screen_widths";

	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div
	class="flex flex-col px-8 py-8 space-y-8 border-b-2 shadow-inner md:py-12 md:space-y-0 md:flex-row bg-dark-main border-accent"
>
	{#if innerWidth >= W_MD}
		<div class="flex w-2/3">
			<div class="flex p-5 my-auto space-x-1 md:space-x-2">
				<span class="text-xl text-accent">Made by Bryan using</span>
				<img class="w-6 h-6" src="images/svelte.svg" alt="Svelte logo" />
				<img class="w-6 h-6" src="images/tailwind.svg" alt="TailwindCSS logo" />
				<img class="w-6 h-6" src="images/typescript.svg" alt="Typescript logo" />
			</div>
		</div>
	{/if}

	<div class="md:w-1/3">
		<div
			class="flex m-auto space-x-10 md:m-0 md:space-x-0 md:space-y-2 md:flex-col md:w-full w-min"
		>
			<a
				class="text-accent"
				href="https://github.com/Blackgaurd"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub profile"
			>
				<i class="md:scale-110 scale-200 -translate-y-0.5 fa-brands fa-github" />
				<span class="hidden text-lg nav-link md:inline-block">GitHub</span>
			</a>
			<a
				class="text-accent"
				href="https://www.linkedin.com/in/bryan-deng-550414200/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn profile"
			>
				<i class="md:scale-110 scale-200 -translate-y-0.5 fa-brands fa-linkedin-in" />
				<span class="hidden text-lg nav-link md:inline-block">LinkedIn</span>
			</a>
			<a class="text-accent" href="mailto://bryan.deng002@gmail.com" aria-label="Email me">
				<i class="md:scale-110 scale-200 -translate-y-0.5 fa-solid fa-envelope" />
				<span class="hidden text-lg nav-link md:inline-block">bryan.deng002@gmail.com</span>
			</a>
		</div>
	</div>

	{#if innerWidth < W_MD}
		<div class="flex m-auto space-x-1">
			<span class="text-accent">Made by Bryan using</span>
			<img class="w-4 h-4 translate-y-1" src="images/svelte.svg" alt="Svelte logo" />
			<img class="w-4 h-4 translate-y-1" src="images/tailwind.svg" alt="TailwindCSS logo" />
			<img class="w-4 h-4 translate-y-1" src="images/typescript.svg" alt="Typescript logo" />
		</div>
	{/if}
</div>
