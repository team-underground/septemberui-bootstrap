<template>
	<div>
		<h3 class="mb-3">Badge</h3>
		<hr>

		<h6 class="mb-3">Examples</h6>
		<div class="bg-white p-4 rounded shadow">
			<base-badge class="mr-2">Primary</base-badge>
			<base-badge variant="success" class="mr-2">Success</base-badge>
			<base-badge variant="danger" class="mr-2">Danger</base-badge>
			<base-badge variant="warning" class="mr-2">Warning</base-badge>
			<base-badge variant="black" class="mr-2">Black</base-badge>
		</div>

		<h6 class="mb-3 mt-5">How to use</h6>
		<prism-editor :code="code" language="html" class="rounded-lg mb-3"></prism-editor>
		<prism-editor :code="jsCode" language="js" class="rounded-lg"></prism-editor>
	</div>
</template>

<script>
const code = `<base-badge class="mr-2">Primary</base-badge>
<base-badge variant="success" class="mr-2">Success</base-badge>
<base-badge variant="danger" class="mr-2">Danger</base-badge>
<base-badge variant="warning" class="mr-2">Warning</base-badge>
<base-badge variant="black" class="mr-2">Black</base-badge>`;

const jsCode = `import BaseBadge from "@/components/BaseBadge.vue";

export default {
	components: {
		BaseBadge
	}
};`;

import BaseBadge from "@/components/BaseBadge.vue";

export default {
	data() {
		return {
			code: code,
			jsCode: jsCode
		};
	},

	components: {
		BaseBadge
	}
};
</script>

<style lang="scss" scoped>
</style>
