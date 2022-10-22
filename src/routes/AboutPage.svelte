<script lang="ts">
	import { smooth_scroll } from "../utils";
</script>

<div id="about" class="py-24 shadow-inner px-14 lg:px-28 lg:py-36 bg-dark-main">
	<!--about me-->
	<h1 class="text-5xl font-bold mb-7 text-accent">About Me</h1>
	<h3 class="text-xl leading-9 lg:leading-relaxed text-light-main">
		<i>Hey there!</i> I'm Bryan, a high school and IB student from Toronto, Ontario. I wish to
		pursue a degree in computer science or mathematics. My current interests include
		<a class="text-accent nav-link" href="https://www.kaggle.com/blackgaurd"> machine learning </a>,
		mathematical modelling and low-level programming.
		<br /><br />
		I taught myself the Python programming language back in 2019, and have been honing my skills ever
		since. My current arsenal consists of several more languages, namely C++, Java, Typescript, LaTeX,
		and <a class="text-accent nav-link" href="https://julialang.org/">Julia</a>. I also have
		experience with front-end web development, building websites such as this one using my stack of
		choice: Svelte, TailwindCSS and Typescript. Check out my
		<a class="text-accent nav-link" href="#projects" on:click={smooth_scroll}>other projects</a>
		below!
		<br /><br />
		Outside of school, I've trained to
		<a
			class="text-accent nav-link"
			href="https://www.sportstats.ca/display-results.xhtml?raceid=114381&status=results&bib=7957"
			>run a half-marathon under 2 hours</a
		>, built my own keyboard, learned to
		<a class="text-accent nav-link" href="https://www.worldcubeassociation.org/persons/2019DENG28">
			solve a Rubik's Cube in under 20 seconds
		</a>, and participated in a few
		<a class="text-accent nav-link" href="https://github.com/Blackgaurd/IgnitionHacks2022"
			>hackathons</a
		>.
	</h3>
</div>

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
