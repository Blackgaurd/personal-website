<script lang="ts">
	export let name: string,
		url: string,
		image_path: string,
		image_description: string,
		project_description: string,
		tools: string[];
</script>

<div class="bg-dark-main rounded-3xl p-2 flex space-x-1.5 w-full aspect-32/11 shadow-lg">
	<div
		class="relative w-1/2 p-8 border-2 bg-light-secondary rounded-l-3xl rounded-r-xl border-accent"
	>
		<!--github link-->
		<div class="absolute flex group right-4 top-3">
			<div
				class="relative hidden px-1 mr-4 rounded-r-sm group-hover:block bg-light-main text-dark-main rounded-l-md"
			>
				<div class="absolute w-2 h-2 rotate-45 bg-light-main -right-1 top-2" />
				<span>See the code!</span>
			</div>
			<a href={url} class="text-center"><i class="scale-150 fa-brands fa-github text-accent" /></a>
		</div>

		<div>
			<h1 class="text-4xl font-bold text-dark-main">{name}</h1>
			<p><i class="text-accent">{tools.join(", ")}</i></p>
		</div>
		<p class="text-xl text-left text-dark-main">~</p>
		<p class="3xl:text-lg lg:text-2xl text-lg text-dark-main">{project_description}</p>
	</div>
	<div />
	<div class="relative w-1/2 group">
		<p
			class="absolute top-0 left-0 right-0 w-2/3 h-0 m-auto text-center duration-300 opacity-0 bottom-16 group-hover:opacity-100 text-accent"
		>
			{image_description}
		</p>
		<div class="w-full h-full overflow-hidden rounded-l-xl rounded-r-3xl">
			<img
				src={image_path}
				alt={`${name} demo image`}
				class="duration-300 group-hover:opacity-10 group-hover:scale-110"
			/>
		</div>
	</div>
</div>
