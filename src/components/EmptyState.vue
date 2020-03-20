<template>
	<div
		class="text-center bg-white py-3 d-flex w-100 align-items-center justify-content-center flex-row shadow rounded-lg"
		:class="{'shadow-none': noShadow == true}"
		:style="{'min-height': height}"
	>
		<div class="w-100">
			<slot>
				<div class="icon-64 bg-blue-100 text-primary rounded-circle text-center mx-auto">
					<eva-icon name="search" fill="currentColor" width="28" height="28"></eva-icon>
				</div>

				<h4 class="mt-4 mb-1">Nothing Found.</h4>
				<p>You couldn't find anything here.</p>
			</slot>
		</div>
	</div>
</template>
 
<script>
export default {
	props: {
		noShadow: {
			type: Boolean,
			default: false
		},
		height: {
			type: String,
			default: "400px"
		}
	}
};
</script>

<style scoped>
</style>	