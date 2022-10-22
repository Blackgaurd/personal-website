<script lang="ts">
	import Project from "./Project.svelte";

	function smooth_scroll(event: MouseEvent) {
		event.preventDefault();
		const target = event.target as HTMLAnchorElement;
		const id = target.getAttribute("href") || "";
		const element = document.querySelector(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	// TODO: add more quotes
	const quotes = ["taking on high school one project at a time"];
	const QUOTE = quotes[Math.floor(Math.random() * quotes.length)];

	let scrollY: number;
	let innerHeight: number;

	$: nav_opacity = Math.min(1, scrollY / innerHeight);
</script>

<svelte:window bind:scrollY bind:innerHeight />

<main class="flex flex-col h-screen relative">
	<!--navbar-->
	<nav
		class="top-0 w-full fixed shadow-md z-30"
		style="background-color: rgba(20,33,61,{nav_opacity});"
	>
		<div class="flex py-3 px-8">
			<div class="w-1/2">
				{#if scrollY === 0}
					<!--keep a ghost element to not mess with the spacing of the rest of nav-->
					<p class="hidden">Bryan Deng</p>
				{:else}
					<p class="text-accent text-lg p-3" style="opacity: {nav_opacity};">
						<a href="#home" class="nav-link" on:click={smooth_scroll}>Bryan Deng</a>
					</p>
				{/if}
			</div>
			<div class="w-1/2 flex justify-end space-x-28">
				<p class="text-lg text-accent p-3">
					<a href="#about" class="nav-link" on:click={smooth_scroll}>About</a>
				</p>
				<p class="text-lg text-accent p-3">
					<a href="#projects" class="nav-link" on:click={smooth_scroll}>Projects</a>
				</p>
				<a
					href="resume.pdf"
					class="text-lg text-dark-main bg-accent p-3 rounded-md shadow-md hover:shadow-sm duration-75"
					>Resume
				</a>
			</div>
		</div>
	</nav>

	<!--main content-->
	<div class="">
		<div class="flex flex-col">
			<div id="home" class="h-screen flex relative">
				<!--main page-->
				<div class="m-auto text-center">
					<h1 class="text-8xl text-accent font-extrabold cursor-default">Bryan Deng.</h1>
					<h3 class="p-1 my-6 text-xl text-dark-main cursor-default">
						<i>{QUOTE}</i><span class="cursor-blink font-semibold">/</span>
					</h3>
					<div class="flex justify-center space-x-12 p-2">
						<a href="https://github.com/Blackgaurd" target="_blank" rel="noopener noreferrer">
							<i class="scale-250 text-dark-main fa-brands fa-square-github" />
						</a>
						<a
							href="https://www.linkedin.com/in/bryan-deng-550414200/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="scale-250 text-dark-main fa-brands fa-linkedin" />
						</a>
						<a href="mailto://bryan.deng002@gmail.com">
							<i class="scale-250 text-dark-main fa-solid fa-square-envelope" />
						</a>
					</div>
				</div>
				<div class="absolute bottom-3 left-0 right-0 flex">
					<!--scroll down arrow-->
					<div class="relative m-auto group">
						<div>
							<div
								class="absolute h-1 w-12 bg-dark-main rotate-45 m-auto -translate-x-4 -translate-y-4"
								style={`opacity: ${1 - nav_opacity * 1.3}`}
							/>
							<div
								class="absolute h-1 w-12 bg-dark-main -rotate-45 m-auto translate-x-4 -translate-y-4"
								style={`opacity: ${1 - nav_opacity * 1.3}`}
							/>
						</div>
						<div>
							<div
								class="absolute h-1 w-12 bg-dark-main rotate-45 m-auto -translate-x-4 -translate-y-8"
								style={`opacity: ${1 - nav_opacity * 1.3}`}
							/>
							<div
								class="absolute h-1 w-12 bg-dark-main -rotate-45 m-auto translate-x-4 -translate-y-8"
								style={`opacity: ${1 - nav_opacity * 1.3}`}
							/>
						</div>
					</div>
				</div>
			</div>

			<div id="about" class="px-28 py-36 bg-dark-main shadow-inner">
				<!--about me-->
				<h1 class="mb-7 text-5xl font-bold text-accent">About Me</h1>
				<h3 class="text-light-main text-xl leading-relaxed">
					<i>Hey there!</i> I'm Bryan, a high school and IB student from Toronto, Ontario. I wish to
					pursue a degree in computer science or mathematics. My current interests include
					<a class="text-accent nav-link" href="https://www.kaggle.com/blackgaurd">
						machine learning
					</a>, mathematical modelling and low-level programming.
					<br /><br />
					I taught myself the Python programming language back in 2019, and have been honing my skills
					ever since. My current arsenal consists of several more languages, namely C++, Java, Typescript,
					LaTeX, and Julia. I also have experience with front-end web development, building websites
					such as this one using my stack of choice: Svelte, TailwindCSS and Typescript. Check out my
					<a href="#projects" on:click={smooth_scroll}>other projects</a> below!
					<br /><br />
					Outside of school, I've trained to
					<a
						class="text-accent nav-link"
						href="https://www.sportstats.ca/display-results.xhtml?raceid=114381&status=results&bib=7957"
						>run a half-marathon under 2 hours</a
					>, learned to
					<a
						class="text-accent nav-link"
						href="https://www.worldcubeassociation.org/persons/2019DENG28"
					>
						solve a Rubik's Cube under 20 seconds
					</a>, and participated in a few
					<a class="text-accent nav-link" href="https://github.com/Blackgaurd/IgnitionHacks2022"
						>hackathons</a
					>.
				</h3>
			</div>

			<div id="projects" class="px-28 py-20">
				<!--projects-->
				<div class="m-4 space-y-2">
					<h1 class="text-5xl font-bold text-accent">Projects</h1>
					<p class="text-dark-main text-lg">
						More on my <a class="underline" href="https://github.com/Blackgaurd">GitHub!</a>
					</p>
				</div>
				<!--using flexbox bc grid cant center last row-->
				<div class="flex flex-wrap justify-center">
					<!--TODO: add how many objects were in the torus render-->
					<div class="w-1/2">
						<div class="m-2">
							<Project
								name="RayJL"
								url="https://github.com/Blackgaurd/RayJL"
								image_path="images/rayjl.png"
								image_description="Torus triangle mesh with green and red point lights casting shadows on the ground. Rendered in ~5 seconds on 8 threads."
								project_description="Fully functional, optimized and multithreaded ray-tracing library built from scratch. Support for poly-mesh files, mirrors, refraction, colored lights and more."
								tools={["Julia", "Python"]}
							/>
						</div>
					</div>
					<div class="w-1/2">
						<div class="m-2">
							<Project
								name="GDT"
								url="https://github.com/Blackgaurd/GDT"
								image_path="images/gdt.png"
								image_description="Graphs demonstrating how the population size of the algorithm affects factors such as training time, test accuracy and how fast the algorithm converges."
								project_description="Genetic Decision Tree. An algorithm that mimicks biological evolution in order to construct optimized decision trees for data classification."
								tools={["Python"]}
							/>
						</div>
					</div>
					<div class="w-1/2">
						<div class="m-2">
							<Project
								name="TI-84 Wordle"
								url="https://github.com/Blackgaurd/TI84-Wordle"
								image_path="images/wordle.jpg"
								image_description="A demonstration of the compiled game being played on a TI-84 Plus CE."
								project_description="Wordle clone written using the C/CE Toolchain and compiled for the ez80 processor. Comes with the (almost) complete word list from the original Wordle."
								tools={["C", "Assembly"]}
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-dark-main shadow-inner flex px-8 py-12">
				<!--footer-->
				<div class="w-2/3 flex">
					<div class="p-5 flex space-x-2 my-auto">
						<span class="text-accent text-xl">Made by Bryan using</span>
						<img class="h-6 w-6" src="images/svelte.svg" alt="Svelte logo" />
						<img class="h-6 w-6" src="images/tailwind.svg" alt="TailwindCSS logo" />
						<img class="h-6 w-6" src="images/typescript.svg" alt="Typescript logo" />
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

	@keyframes blink {
		0% {
			opacity: 0;
		}
	}

	.cursor-blink {
		animation: blink 1s steps(2) infinite;
	}
</style>
