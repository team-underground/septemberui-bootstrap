<template>
	<div>
		<h3 class="mb-3">Inputs</h3>
		<hr>

		<h6 class="mt-5 mb-3">Eaxmple: Basic Input</h6>
		<div class="bg-white p-4 rounded shadow">
			<base-input
				:has-error="errors['name'] ? true : false"
				label="Name"
				help-text="Please enter your complete name"
				v-model="name"
				id="name"
				placeholder="Please enter your name..."
				@keydown="delete errors['name']"
			>
				<div slot="invalid-feedback">Please provide a name.</div>
			</base-input>

			<base-input-password
				:has-error="errors['password'] ? true : false"
				label="Password"
				help-text="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
				v-model="password"
				id="password"
				placeholder="More than 8 characters..."
				@keydown="delete errors['password']"
			>
				<div slot="invalid-feedback">Please enter a password.</div>
			</base-input-password>
		</div>

		<h6 class="mt-5 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<div class="bg-white p-4 mt-5 rounded shadow-sm">
			<form @submit.prevent="submitForm">
				<div class="row">
					<div class="col-md-4">
						<base-multiselect
							label="Select Colors"
							:items="items"
							v-model="multiselect"
							:has-error="errors['multiselect'] ? true : false"
							@input="delete errors['multiselect']"
							placeholder="Please select some color..."
						>
							<div slot="invalid-feedback">{{ errors['multiselect'] ? errors['multiselect'][0] : '' }}</div>
						</base-multiselect>
					</div>
				</div>

				<base-input
					:has-error="errors['name'] ? true : false"
					label="Name"
					help-text="Please enter your complete name"
					v-model="name"
					id="name"
					placeholder="Please enter your name..."
					@keydown="delete errors['name']"
				>
					<div slot="invalid-feedback">Please provide a name.</div>
				</base-input>

				<base-input-password
					:has-error="errors['password'] ? true : false"
					label="Password"
					help-text="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
					v-model="password"
					id="password"
					placeholder="More than 8 characters..."
					@keydown="delete errors['password']"
				>
					<div slot="invalid-feedback">Please enter a password.</div>
				</base-input-password>

				<base-textarea
					v-model="content"
					label="Content"
					help-text="Write a content with full of resources..."
					:has-error="errors['content'] ? true : false"
					@keydown="delete errors['content']"
					stats
				>
					<div slot="invalid-feedback">Please enter your content.</div>
				</base-textarea>

				<base-input
					v-numeric-float
					:has-error="errors['number'] ? true : false"
					label="Number"
					v-model.number="number"
					id="number"
					placeholder="Please enter a numeric value..."
					@keydown="delete errors['number']"
				>
					<div slot="invalid-feedback">Please enter a numeric value.</div>
				</base-input>

				<base-input
					v-numeric-only
					:has-error="errors['phone'] ? true : false"
					label="Phone Number"
					v-model.number="phone"
					id="phone"
					placeholder="Please enter a valid 10 digit phone"
					@keydown="delete errors['phone']"
				>
					<div slot="invalid-feedback">Please enter a phone number.</div>
				</base-input>

				<!-- <base-input-phonenumber
					label="Phone Number"
					v-model="phone"
					:has-error="errors['phone'] ? true : false"
					@keydown="delete errors['phone']"
				>
					<div slot="invalid-feedback">Please enter a phone no.</div>
				</base-input-phonenumber>-->

				<base-button ref="registerButton" class="btn btn-primary" type="submit">Register Now</base-button>
			</form>
		</div>
	</div>
</template>

<script>
const code = `<base-input
	:has-error="isInvalid && errors['name'] ? true : false" 
	label="Name" 
	help-text="Please enter your complete name"  
	v-model="name"
	id="name"
	placeholder="Please enter your name..."  
	@keydown="delete errors['name']"
>
	<div slot="invalid-feedback" v-if="isInvalid && errors['name']">
		{{ errors['name'][0] }}
	</div>
</base-input>

// Password Input
<base-input-password
	:has-error="isInvalid && errors['password'] ? true : false"
	label="Password"
	help-text="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."
	v-model="password"
	id="password"
	placeholder="More than 8 characters..."
	@keydown="delete errors['password']"
>
	<div slot="invalid-feedback" v-if="isInvalid && errors['password']">
		{{ errors['password'][0] }}
	</div>
</base-input-password>

// Numeric With Float
<base-input
	v-numeric-float
	:has-error="errors['number'] ? true : false"
	label="Number"
	v-model.number="number"
	id="number"
	placeholder="Please enter a numeric value..."
	@keydown="delete errors['number']"
>
	<div slot="invalid-feedback">Please enter a numeric value.</div>
</base-input>

// Only Numeric value Input
<base-input
	v-numeric-only
	:has-error="errors['phone'] ? true : false"
	label="Phone Number"
	v-model.number="phone"
	id="phone"
	placeholder="Please enter a valid 10 digit phone"
	@keydown="delete errors['phone']"
>
	<div slot="invalid-feedback">Please enter a phone number.</div>
</base-input>`;

const jsCode = `import BaseInput from "@/components/BaseInput.vue";
import BaseInputPassword from "@/components/BaseInputPassword.vue";

export default {
	data() {
		return {
			name: "",
			password: "",

			errors: {}
		};
	},
	components: {
		BaseInput,
		BaseInputPassword
	},
	computed: {
		isInvalid() {
			return Object.keys(this.errors).length > 0 ? true : false;
		}
	}
};`;

import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseInputPassword from "@/components/BaseInputPassword.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import BaseInputPhonenumber from "@/components/BaseInputPhonenumber.vue";
import BaseMultiselect from "@/components/BaseMultiselect.vue";
import BaseTypehead from "@/components/BaseTypehead.vue";

export default {
	data() {
		return {
			code: code,
			jsCode: jsCode,

			name: "",
			password: "",
			content: "",
			phone: "",
			number: 0,
			errors: {},

			typehead: [],
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
		BaseButton,
		BaseInput,
		BaseInputPassword,
		BaseTextarea,
		BaseMultiselect,
		BaseTypehead
	},

	methods: {
		submitForm() {
			setTimeout(() => {
				this.$refs.registerButton.startLoading();
				this.errors = {
					name: ["Name is required"],
					password: ["Password is required"],
					content: ["Content is required"],
					phone: ["Phone is required"],
					multiselect: ["Field is required"]
				};
			}, 0);
		}
	}
};
</script>

<style lang="scss" scoped>
</style>