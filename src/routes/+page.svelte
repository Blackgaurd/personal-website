<script lang="ts">
	import HomePage from "./HomePage.svelte";

	import Navbar from "./Navbar.svelte";

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
	let innerWidth: number;

	$: nav_opacity = Math.min(1, scrollY / innerHeight);
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />

<main class="relative flex flex-col h-screen">
	<!--navbar-->
	<Navbar />

	<!--main content-->
	<div class="flex flex-col">
		<HomePage />

		<div id="about" class="shadow-inner px-28 py-36 bg-dark-main">
			<!--about me-->
			<h1 class="text-5xl font-bold mb-7 text-accent">About Me</h1>
			<h3 class="text-xl leading-relaxed text-light-main">
				<i>Hey there!</i> I'm Bryan, a high school and IB student from Toronto, Ontario. I wish to
				pursue a degree in computer science or mathematics. My current interests include
				<a class="text-accent nav-link" href="https://www.kaggle.com/blackgaurd">
					machine learning
				</a>, mathematical modelling and low-level programming.
				<br /><br />
				I taught myself the Python programming language back in 2019, and have been honing my skills
				ever since. My current arsenal consists of several more languages, namely C++, Java, Typescript,
				LaTeX, and Julia. I also have experience with front-end web development, building websites such
				as this one using my stack of choice: Svelte, TailwindCSS and Typescript. Check out my
				<a href="#projects" on:click={smooth_scroll}>other projects</a> below!
				<br /><br />
				Outside of school, I've trained to
				<a
					class="text-accent nav-link"
					href="https://www.sportstats.ca/display-results.xhtml?raceid=114381&status=results&bib=7957"
					>run a half-marathon under 2 hours</a
				>, built my own keyboard, learned to
				<a
					class="text-accent nav-link"
					href="https://www.worldcubeassociation.org/persons/2019DENG28"
				>
					solve a Rubik's Cube in under 20 seconds
				</a>, and participated in a few
				<a class="text-accent nav-link" href="https://github.com/Blackgaurd/IgnitionHacks2022"
					>hackathons</a
				>.
			</h3>
		</div>

		<div id="projects" class="px-10 py-20 xl:px-28">
			<!--projects-->
			<div class="m-4 space-y-2">
				<h1 class="text-5xl font-bold text-accent">Projects</h1>
				<p class="text-lg text-dark-main">
					More on my <a class="underline" href="https://github.com/Blackgaurd">GitHub!</a>
				</p>
			</div>
			<!--using flexbox bc grid cant center last row-->
			<div class="flex flex-wrap justify-center">
				<!--TODO: add how many objects were in the torus render-->
				<div class="m-auto 3xl:w-1/2">
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
				<div class="m-auto 3xl:w-1/2">
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
				<div class="m-auto 3xl:w-1/2">
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
