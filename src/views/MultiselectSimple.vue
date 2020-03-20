<template>
	<div>
		<h3 class="mb-3">Multiselect (Simple)</h3>
		<hr>

		<div class="row mt-4">
			<div class="col-md-4">
				<base-multiselect
					label="Base Multiselect"
					:items="items"
					v-model="multiselect"
					placeholder="Please select some color..."
				></base-multiselect>
			</div>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<base-multiselect
	label="Base Multiselect"
	:items="items"
	v-model="multiselect"
	placeholder="Please select some color..."
></base-multiselect>`;

const jsCode = `import BaseMultiselect from "@/components/BaseMultiselect.vue";

export default {
	data() {
		return {
			multiselect: [],
			items: [
				"Red",
				"Green",
				"Blue",
				"Orange",
				"Purple",
				"Teal",
				"Brown",
				"Yellow"
			]
		};
	},
	components: {
		BaseMultiselect
	}
};`;

import BaseMultiselect from "@/components/BaseMultiselect.vue";

export default {
	data() {
		return {
			code: code,
			jsCode: jsCode,
			multiselect: [],
			items: [
				"Red",
				"Green",
				"Blue",
				"Orange",
				"Purple",
				"Teal",
				"Brown",
				"Yellow"
			]
		};
	},
	components: {
		BaseMultiselect
	}
};
</script>

<style lang="scss" scoped>
</style>