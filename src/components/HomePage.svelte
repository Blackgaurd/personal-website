<script lang="ts">
	// TODO: add more quotes
	const quotes = ["taking on high school one project at a time"];
	const QUOTE = quotes[Math.floor(Math.random() * quotes.length)];

	let scrollY: number;
	let innerHeight: number;

	$: arrow_opacity = Math.min(1, scrollY / innerHeight);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div id="home" class="relative flex h-screen">
	<div class="m-auto text-center">
		<h1 class="font-extrabold cursor-default text-7xl lg:text-8xl text-accent">Bryan Deng.</h1>
		<h3 class="p-1 my-6 text-base cursor-default 3xl:text-xl text-dark-main">
			<i>{QUOTE}</i><span class="font-semibold cursor-blink">/</span>
		</h3>

		<!--icons-->
		<div class="flex justify-center p-2 space-x-12">
			<a
				href="https://github.com/Blackgaurd"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub profile"
			>
				<i class="fa-3x text-dark-main fa-brands fa-square-github" />
			</a>
			<a
				href="https://www.linkedin.com/in/bryan-deng-550414200/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn profile"
			>
				<i class="fa-3x text-dark-main fa-brands fa-linkedin" />
			</a>
			<a href="mailto://bryan.deng002@gmail.com" aria-label="Email me">
				<i class="fa-3x text-dark-main fa-solid fa-square-envelope" />
			</a>
		</div>
	</div>

	<!--scroll down arrow-->
	<div class="absolute bottom-0 left-0 right-0 flex">
		<div class="relative m-auto group">
			<div class="animate-bounce-top">
				<div
					class="absolute w-12 h-1 m-auto rotate-45 -translate-x-10 bg-dark-main"
					style={`opacity: ${1 - arrow_opacity * 1.3}`}
				/>
				<div
					class="absolute w-12 h-1 m-auto -rotate-45 -translate-x-2 bg-dark-main"
					style={`opacity: ${1 - arrow_opacity * 1.3}`}
				/>
			</div>
			<div class="animate-bounce-bottom">
				<div
					class="absolute w-12 h-1 m-auto rotate-45 -translate-x-10 bg-dark-main"
					style={`opacity: ${1 - arrow_opacity * 1.3}`}
				/>
				<div
					class="absolute w-12 h-1 m-auto -rotate-45 -translate-x-2 bg-dark-main"
					style={`opacity: ${1 - arrow_opacity * 1.3}`}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes blink {
		0% {
			opacity: 0;
		}
	}

	.cursor-blink {
		animation: blink 1s steps(2) infinite;
	}

	@keyframes bounce-top {
		0% {
			transform: translateY(-3rem);
		}
		50% {
			transform: translateY(-3.25rem);
		}
		100% {
			transform: translateY(-3rem);
		}
	}

	.animate-bounce-top {
		animation: bounce-top 1s infinite;
		animation-delay: 50ms;
	}

	@keyframes bounce-bottom {
		0% {
			transform: translateY(-2rem);
		}
		50% {
			transform: translateY(-2.25rem);
		}
		100% {
			transform: translateY(-2rem);
		}
	}

	.animate-bounce-bottom {
		animation: bounce-bottom 1s infinite;
	}
</style>
