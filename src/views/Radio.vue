<template>
	<div>
		<h3>Radio</h3>
		<hr>

		<base-alert class="mb-4">
			<strong>Note:</strong> All radio inputs must have a default value.
		</base-alert>

		<h6 class="mb-3">Basic Example - Stacked Radio</h6>
		<base-radio
			label="Select Gender"
			help-text="select aleast one"
			v-model="genderType"
			:options="genders"
			name="gender"
		>
			<template slot-scope="option">{{ option.row.label }}</template>
		</base-radio>

		<div class="alert alert-light shadow-sm my-3">
			<code class="mb-0">{{ genderType }}</code>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5">Basic Example - Inline Radio</h6>
		<base-radio v-model="colorType" :options="colors" name="color" :stacked="false">
			<template slot-scope="option">{{ option.row.label }}</template>
		</base-radio>

		<div class="alert alert-light shadow-sm my-3">
			<code class="mb-0">{{ colorType }}</code>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code2" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5">Example with Custom label</h6>
		<base-radio
			classes="border border-width-2px p-3 rounded-lg bg-white w-50"
			label="Payment Mode"
			help-text="Please select aleast one"
			v-model="paymentModeSelected"
			:options="paymentModes"
			name="paymentMode"
			:stacked="false"
			size="large"
		>
			<template slot-scope="option">
				<div class="d-flex">
					<div class="pl-2">
						<h5>{{ option.row.label }}</h5>
						<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
					</div>
				</div>
			</template>
		</base-radio>

		<div class="alert alert-light shadow-sm my-3">
			<code class="mb-0">{{ paymentModeSelected }}</code>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code3" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5">Example with Custom Active</h6>
		<base-radio
			classes="border border-width-2px cursor-pointer pl-2 pr-4 py-3 rounded-lg bg-white w-25"
			label="Select your plan"
			help-text="Please select aleast one"
			v-model="planSelected"
			:options="plans"
			name="paymentMode"
			:stacked="false"
			size="large"
			:custom-active="true"
			custom-active-class="text-primary"
		>
			<template slot-scope="option">
				<div class="d-flex">
					<div class="pl-2">
						<h5 class="text-truncate">{{ option.row.label }}</h5>
						<span v-if="option.row.label == 'Free Forever'">Get help from our support team.</span>
						<span v-if="option.row.label == 'For Work'">Get priority support.</span>
						<span v-if="option.row.label == 'For Teams'">Get all our premium features.</span>
					</div>
				</div>
			</template>
		</base-radio>

		<div class="alert alert-light shadow-sm my-3">
			<code class="mb-0">{{ planSelected }}</code>
		</div>

		<prism-editor language="html" :code="code5" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<h6 class="mt-5 mb-3">Example without components</h6>
		<label class="border px-3 py-2 bg-white rounded-pill mr-3 cursor-pointer">
			<input name="type" type="radio" value="workshop" class="mr-2" checked>Workshop
		</label>
		<label class="border px-3 py-2 bg-white rounded-lg mr-3 cursor-pointer">
			<input name="type" type="radio" value="meetup" class="mr-2">Meetup
		</label>
		<label class="border px-3 py-2 bg-white rounded-lg cursor-pointer">
			<input name="type" type="radio" value="conference" class="mr-2">Conference
		</label>
		<prism-editor language="html" :code="code4" :line-numbers="true" class="rounded-lg mb-4 mt-3"></prism-editor>
	</div>
</template>

<script>
const code = `<base-radio
	label="Select Gender"
	help-text="select aleast one"
	v-model="genderType"
	:options="genders"
	name="gender"
>
	<template scope="option">{{ option.row.label }}</template>
</base-radio>
`;

const code2 = `<base-radio v-model="colorType" :options="colors" name="color" :stacked="false">
	<template scope="option">{{ option.row.label }}</template>
</base-radio>`;

const code3 = `<base-radio
	classes="border p-3 rounded"
	label="Payment Mode"
	help-text="Please select aleast one"
	v-model="paymentModeSelected"
	:options="paymentModes"
	name="paymentMode"
	:stacked="false"
	size="large"
>
	<template scope="option">
		<div class="d-flex">
			<div class="pl-2">
				<h5>{{ option.row.label }}</h5>
				<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
			</div>
		</div>
	</template>
</base-radio>`;

const code5 = `<base-radio
	classes="border border-width-2px cursor-pointer pl-2 pr-4 py-3 rounded-lg bg-white w-25"
	label="Select your plan"
	help-text="Please select aleast one"
	v-model="planSelected"
	:options="plans"
	name="paymentMode"
	:stacked="false"
	size="large"
	:custom-active="true"
	custom-active-class="text-primary"
>
	<template slot-scope="option">
		<div class="d-flex">
			<div class="pl-2">
				<h5 class="text-truncate">{{ option.row.label }}</h5>
				<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
			</div>
		</div>
	</template>
</base-radio>`;

const jsCode = `import BaseRadio from "@/components/BaseRadio.vue";

export default {
	data() {
		return {
			genderType: "male",
			genders: [
				{ label: "Male", value: "male" },
				{ label: "Female", value: "female" },
				{ label: "Other", value: "others" }
			],

			colorType: "red",
			colors: [
				{ label: "Red", value: "red" },
				{ label: "Green", value: "green" },
				{ label: "Yellow", value: "yellow" }
			],

			paymentModes: [
				{
					label: "Debit/Credit Card",
					value: "debit-credit"
				},
				{
					label: "Cash",
					value: "cash"
				}
			],
			paymentModeSelected: "cash"
		};
	},
	components: {
		BaseRadio
	}
};`;

const code4 = `<label class="border px-3 py-2 bg-white rounded-pill mr-3 cursor-pointer">
	<input name="type" type="radio" value="workshop">Workshop
</label>
<label class="border px-3 py-2 bg-white rounded-lg mr-3 cursor-pointer">
	<input name="type" type="radio" value="meetup" class="mr-2">Meetup
</label>
<label class="border px-3 py-2 bg-white rounded-lg cursor-pointer">
	<input name="type" type="radio" value="conference" class="mr-2">Conference
</label>`;

import BaseRadio from "@/components/BaseRadio.vue";
import BaseAlert from "@/components/BaseAlert.vue";

export default {
	data() {
		return {
			code: code,
			code2: code2,
			code3: code3,
			code4: code4,
			code5: code5,
			jsCode: jsCode,

			genderType: "male",
			genders: [
				{ label: "Male", value: "male" },
				{ label: "Female", value: "female" },
				{ label: "Other", value: "others" }
			],

			colorType: "red",
			colors: [
				{ label: "Red", value: "red" },
				{ label: "Green", value: "green" },
				{ label: "Yellow", value: "yellow" }
			],

			paymentModes: [
				{
					label: "Debit/Credit Card",
					value: "debit-credit"
				},
				{
					label: "Cash",
					value: "cash"
				}
			],
			paymentModeSelected: "cash",

			plans: [
				{
					label: "Free Forever",
					value: "free-forever"
				},
				{
					label: "For Work",
					value: "for-work"
				},
				{
					label: "For Teams",
					value: "for-teams"
				}
			],
			planSelected: "free-forever"
		};
	},
	components: {
		BaseRadio,
		BaseAlert
	}
};
</script>

<style lang="scss" scoped>
</style>