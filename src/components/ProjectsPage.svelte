<script lang="ts">
	import Project from "./Project.svelte";

	import { projects } from "../projects";
</script>

<div id="projects" class="px-10 py-20 sm:px-14 lg:px-28">
	<div class="mb-3 space-y-2">
		<h1 class="text-5xl font-bold text-accent">Projects</h1>
		<p class="text-lg text-dark-main">
			More on my <a
				class="underline"
				href="https://github.com/Blackgaurd"
				aria-label="GitHub profile">GitHub!</a
			>
		</p>
	</div>
	<!--using flexbox bc grid cant center last row-->
	<div class="flex flex-wrap justify-center">
		{#each projects as { name, url, tools, project_description, image_path, image_description }}
			<div class="my-1 3xl:w-1/2">
				<div class="3xl:mx-1">
					<Project {name} {url} {tools} {project_description} {image_path} {image_description} />
				</div>
			</div>
		{/each}
	</div>
</div>
