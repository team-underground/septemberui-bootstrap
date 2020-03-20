<template>
	<div class="card border-0 shadow w-100">
		<h5
			class="card-header border-0 d-flex align-items-center justify-content-between"
			v-if="withHeader"
		>
			<div class="text-truncate">
				<slot name="header"></slot>
			</div>
			<div>
				<slot name="header-action"></slot>
			</div>
		</h5>

		<div class="card-body">
			<slot/>
		</div>

		<div class="card-footer text-muted border-0" v-if="withFooter">
			<slot name="footer"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "BaseCard",

	props: {
		withHeader: {
			type: Boolean,
			default: false
		},
		withFooter: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style lang="scss" scoped>
</style>