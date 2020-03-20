<template>
	<div>
		<h2>Buttons</h2>
		<hr>

		<h6 class="mb-3">Example with spinner</h6>

		<div class="mb-4 alert alert-light shadow-sm">
			<base-button
				class="btn btn-outline-secondary rounded-lg"
				ref="registerButton2"
				@click="submitButton2"
				type="button"
			>Cancel</base-button>
			<base-button
				class="btn btn-primary rounded-lg"
				ref="registerButton"
				@click="submitButton"
				type="button"
			>Register Now</base-button>
		</div>

		<h6 class="mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<base-button
	class="btn btn-outline-secondary rounded-lg"
	ref="registerButton2"
	@click="submitButton2"
	type="button"
>Cancel</base-button>

<base-button
	class="btn btn-primary rounded-lg"
	ref="registerButton"
	@click="submitButton"
	type="button"
>Register Now</base-button>`;

const jsCode = `import BaseButton from "@/components/BaseButton.vue";

export default { 
	components: {
		BaseButton
	},
	methods: {
		submitButton() {
			// Start the Spinner
			this.$refs.registerButton.startLoading();

			// Perform axios requests
			axios.post()
				.then((response) => {})
				.catch((error) => {})
				.finally(() => {
					// Stop the spinner
					this.$refs.registerButton.stopLoading();
				})
		},

		submitButton2() {
			this.$refs.registerButton2.startLoading();
		}
	}
}`;

import BaseButton from "@/components/BaseButton.vue";

export default {
	data() {
		return {
			code: code,
			jsCode: jsCode
		};
	},

	components: {
		BaseButton
	},

	methods: {
		submitButton() {
			this.$refs.registerButton.startLoading();
		},

		submitButton2() {
			this.$refs.registerButton2.startLoading();
		}
	}
};
</script>

<style lang="scss" scoped>
</style>