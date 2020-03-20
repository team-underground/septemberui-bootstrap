<template>
	<div>
		<h2 class="mb-3">Checkbox</h2>
		<hr>

		<h6>Example with Array</h6>
		<base-checkbox
			name="optionSelected"
			v-model="optionSelected"
			v-for="option in options"
			:key="option"
			:id="`${option}`"
			:model-value="option"
			:value="option"
		>{{ option }}</base-checkbox>

		<div class="alert alert-light shadow-sm my-3">
			<code>{{ optionSelected }}</code>
		</div>

		<h6 class="mb-3 mt-5">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5">Example with Object</h6>
		<label for class="mb-1">Select Colors</label>
		<base-checkbox
			name="optionSelected"
			v-model="optionObjectSelected"
			v-for="option in optionsObject"
			:key="option.value"
			:id="option.value"
			:model-value="option.value"
			:value="option.value"
		>{{ option.name }}</base-checkbox>

		<div class="alert alert-light shadow-sm my-3">
			<code>{{ optionObjectSelected }}</code>
		</div>

		<h6 class="mb-3 mt-5">How to use</h6>
		<prism-editor language="html" :code="code2" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<base-checkbox
	name="optionSelected"
	v-model="optionSelected"
	v-for="(option, index) in options"
	:key="option"
	:id="index"
	:model-value="option"
	:value="option"
>{{ option }}</base-checkbox>`;

const code2 = `<base-checkbox
	name="optionSelected"
	v-model="optionObjectSelected"
	v-for="option in optionsObject"
	:key="option.value"
	:id="option.value"
	:model-value="option.value"
	:value="option.value"
>{{ option.name }}</base-checkbox>`;

const jsCode = `import BaseCheckbox from "@/components/BaseCheckbox.vue"

export default {
	components: {
		BaseCheckbox
	},
	data() {
		return {
			optionSelected: ["Green"],
			options: ["Red", "Green", "Blue", "Purple"],
			optionObjectSelected: [1],
			optionsObject: [
				{
					name: "Red",
					value: 1
				},
				{
					name: "Green",
					value: 2
				},
				{
					name: "Blue",
					value: 3
				},
				{
					name: "Purple",
					value: 4
				}
			]
		};
	}
}`;

import BaseCheckbox from "@/components/BaseCheckbox.vue";
export default {
	data() {
		return {
			optionSelected: ["Green"],
			options: ["Red", "Green", "Blue", "Purple"],

			optionObjectSelected: [1],
			optionsObject: [
				{
					name: "Red",
					value: 1
				},
				{
					name: "Green",
					value: 2
				},
				{
					name: "Blue",
					value: 3
				},
				{
					name: "Purple",
					value: 4
				}
			],

			code: code,
			code2: code2,
			jsCode: jsCode
		};
	},

	components: {
		BaseCheckbox
	}
};
</script>

<style lang="scss" scoped>
</style>