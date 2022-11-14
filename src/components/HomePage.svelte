<script lang="ts">
	// TODO: add more quotes
	const quotes = ["taking on high school one project at a time"];
	const QUOTE = quotes[Math.floor(Math.random() * quotes.length)];

	let scrollY: number;
	let innerHeight: number;

	$: arrow_opacity = Math.min(1, scrollY / innerHeight);
	// letter spacing rom 2 to 5
	$: letter_spacing = 2 + (scrollY / innerHeight) * 150;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div id="home" class="relative flex h-screen">
	<div class="m-auto text-center">
		<h1 class="font-extrabold cursor-default text-7xl lg:text-8xl text-accent fade-in1">
			Bryan Deng.
		</h1>
		<h2 class="p-1 my-6 text-base cursor-default 3xl:text-xl text-dark-main fade-in2">
			<i>{QUOTE}</i>
		</h2>

		<!--icons-->
		<div class="flex justify-center p-2 space-x-12">
			<a
				href="https://github.com/Blackgaurd"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub profile"
			>
				<i class="fa-3x text-dark-main fa-brands fa-square-github fade-in4" />
			</a>
			<a
				href="https://www.linkedin.com/in/bryan-deng-550414200/"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="LinkedIn profile"
			>
				<i class="fa-3x text-dark-main fa-brands fa-linkedin fade-in3" />
			</a>
			<a href="mailto://bryan.deng002@gmail.com" aria-label="Email me">
				<i class="fa-3x text-dark-main fa-solid fa-square-envelope fade-in5" />
			</a>
		</div>
	</div>

	<!--scroll down arrow-->
	<div class="absolute bottom-0 left-0 right-0 flex appear">
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

	@keyframes fade-bottom {
		0% {
			opacity: 0;
			transform: translateY(1.5rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.fade-in1 {
		animation: fade-bottom 1s ease-in-out;
	}
	.fade-in2 {
		animation: fade-bottom 1s ease-in-out forwards;
		animation-delay: 0.3s;
		opacity: 0;
	}
	.fade-in3 {
		animation: fade-bottom 1s ease-in-out forwards;
		animation-delay: 0.6s;
		opacity: 0;
	}
	.fade-in4 {
		animation: fade-bottom 1s ease-in-out forwards;
		animation-delay: 0.8s;
		opacity: 0;
	}
	.fade-in5 {
		animation: fade-bottom 1s ease-in-out forwards;
		animation-delay: 1s;
		opacity: 0;
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.appear {
		animation: fade 1s ease-in-out forwards;
		animation-delay: 1.2s;
		opacity: 0;
	}
</style>
