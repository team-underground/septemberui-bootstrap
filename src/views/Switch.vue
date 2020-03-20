<template>
	<div>
		<h3>Switch / Toggle</h3>
		<hr>

		<h6>Example</h6>
		<base-switch color="#F5BF21" v-model="switchInput">
			<span v-if="switchInput == true">Active</span>
			<span v-if="switchInput == false">Not Active</span>
		</base-switch>

		<div class="alert alert-light shadow-sm my-3">
			<pre class="mb-0">{{ switchInput }}</pre>
		</div>

		<h6 class="my-3 mt-5">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<base-switch color="#F5BF21" v-model="switchInput">
	<span v-if="switchInput == true">Active</span>
	<span v-if="switchInput == false">Not Active</span>
</base-switch>`;

const jsCode = `import BaseSwitch from "@/components/BaseSwitch.vue";

export default {
	data() {
		return {
			switchInput: false
		};
	},

	components: {
		BaseSwitch
	}
};`;

import BaseSwitch from "@/components/BaseSwitch.vue";
export default {
	data() {
		return {
			code: code,
			jsCode: jsCode,
			switchInput: false
		};
	},

	components: {
		BaseSwitch
	}
};
</script>

<style lang="scss" scoped>
</style>