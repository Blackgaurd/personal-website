<script lang="ts">
	import Project from "./Project.svelte";
</script>

<div id="projects" class="px-10 py-20 sm:px-14 lg:px-28">
	<div class="mb-3 space-y-2">
		<h1 class="text-5xl font-bold text-accent">Projects</h1>
		<p class="text-lg text-dark-main">
			More on my <a class="underline" href="https://github.com/Blackgaurd">GitHub!</a>
		</p>
	</div>
	<!--using flexbox bc grid cant center last row-->
	<div class="flex flex-wrap justify-center">
		<!--TODO: add how many objects were in the torus render-->
		<div class="my-1 3xl:w-1/2">
            <div class="3xl:mx-1">
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
		<div class="my-1 3xl:w-1/2">
            <div class="3xl:mx-1">
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
		<div class="my-1 3xl:w-1/2">
            <div class="3xl:mx-1">
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
