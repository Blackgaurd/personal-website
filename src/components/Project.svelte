<script lang="ts">
	export let name: string,
		url: string,
		image_path: string,
		image_description: string,
		project_description: string,
		tools: string[];
</script>

<div
	class="bg-dark-main lg:rounded-3xl rounded-2xl lg:p-2 p-1 flex md:space-x-1.5 md:space-y-0 space-y-1 w-full shadow-lg flex-col md:flex-row 3xl:aspect-32/11"
>
	<!--description-->
	<div
		class="relative w-full p-3 border-2 rounded-b-lg md:w-1/2 xl:w-2/3 3xl:w-1/2 lg:p-5 xl:p-8 bg-light-secondary rounded-t-2xl md:rounded-l-2xl md:rounded-r-xl lg:rounded-l-3xl border-accent"
	>
		<!--github link-->
		<div class="absolute flex group right-4 top-3">
			<div
				class="relative hidden px-1 mr-4 rounded-r-sm group-hover:block bg-light-main text-dark-main rounded-l-md shadow-md"
			>
				<div class="absolute w-2 h-2 rotate-45 bg-light-main -right-1 top-2" />
				<span>See the code!</span>
			</div>
			<a href={url} class="text-center" aria-label="View the GitHub repository for {name}"
				><i class="fa-xl fa-brands fa-github text-accent" /></a
			>
		</div>

		<h1 class="text-2xl font-bold lg:text-4xl text-dark-main">{name}</h1>
		<p><i class="text-sm text-accent lg:text-base xl:text-lg">{tools.join(", ")}</i></p>
		<p class="hidden text-xl text-left xl:block text-dark-main">~</p>
		<p class="text-lg 3xl:text-lg lg:text-xl text-dark-main">{project_description}</p>
	</div>

	<!--image-->
	<div
		class="relative w-full overflow-hidden rounded-t-lg md:w-1/2 xl:w-1/3 3xl:w-1/2 2xl:w-1/2 group rounded-b-2xl lg:rounded-r-3xl md:rounded-l-xl md:rounded-r-2xl"
	>
		<p
			class="absolute top-0 left-0 right-0 w-2/3 h-0 m-auto text-center duration-300 opacity-0 bottom-16 group-hover:opacity-100 text-accent"
		>
			{image_description}
		</p>
		<img
			src={image_path}
			alt={`${name} demo image`}
			class="duration-300 group-hover:opacity-10 group-hover:scale-110"
		/>
	</div>
</div>
