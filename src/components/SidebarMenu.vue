<template>
	<div>
		<div class="sidebar-brand">
			<slot name="sidebar-brand"></slot>
		</div>

		<template v-for="sidebaritem in sidebaritems">
			<h6 class="sidebar-title mt-4 px-4 mb-1">{{ sidebaritem.title }}</h6>
			<router-link
				:to="link.to"
				v-for="link in sidebaritem.links"
				:key="link.title"
				class="d-flex w-100 px-4 py-2 sidebar-link align-items-center"
			>
				<eva-icon
					v-if="link.icon"
					width="20"
					height="20"
					:name="link.icon"
					animation="pulse"
					fill="currentColor"
					class="mr-4"
					style="opacity:0.6"
				></eva-icon>
				{{ link.title }}
			</router-link>
		</template>
	</div>
</template>

<script>
export default {
	name: "SidebarMenu",

	props: {
		sidebaritems: {
			type: Array,
			required: true
		}
	}
};
</script>

<style scoped>
</style>