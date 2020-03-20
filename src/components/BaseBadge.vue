<template>
	<span
		class="badge badge-pill rounded-pill border-width-2px"
		:class="badgeClasses"
		:variant="variant"
	>
		<slot/>
	</span>
</template>

<script>
export default {
	name: "BaseBadge",

	props: {
		variant: {
			type: String,
			default: "info"
		}
	},
	computed: {
		badgeClasses() {
			return {
				"badge--primary": this.variant === "info",
				"badge--success": this.variant === "success",
				"badge--danger": this.variant === "danger",
				"badge--warning": this.variant === "warning",
				"badge-light": this.variant === "white"
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.badge--primary {
	background-color: #eff8ff;
	border-color: #bcdefa;
	color: #2779bd;
}

.badge--success {
	background-color: #e3fcec;
	border-color: #a2f5bf;
	color: #1f9d55;
}

.badge--danger {
	background-color: #fcebea;
	border-color: #f9acaa;
	color: #cc1f1a;
}

.badge--warning {
	background-color: #fff5eb;
	border-color: #fcd9b6;
	color: #de751f;
}
</style>