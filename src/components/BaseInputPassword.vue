<template>
	<div class="form-group position-relative">
		<label :for="label" class="mb-1">{{ label }}</label>

		<input
			:type="currentType"
			class="form-control password-input"
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
			:disabled="disabled"
			:class="hasError ? 'is-invalid' : ''"
			@keydown="$emit('keydown', $event)"
		>
		<span
			class="password-toggle"
			:class="{'password-toggle-hide': currentType == 'text', 'password-toggle-show': currentType == 'password'}"
			@click="togglePassword($event)"
		></span>

		<small v-if="helpText" class="d-block form-text text-muted">{{ helpText }}</small>

		<div v-if="hasError == true" class="invalid-feedback">
			<slot name="invalid-feedback"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "BaseInputPassword",

	inheritAttrs: false,

	props: {
		label: {
			type: String
		},
		type: {
			type: String,
			default: "password"
		},
		value: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		hasError: {
			type: Boolean,
			default: false
		},
		helpText: {
			type: String
		}
	},

	data() {
		return {
			currentType: this.type
		};
	},

	methods: {
		togglePassword() {
			if (this.currentType == "password") {
				this.currentType = "text";
			} else {
				this.currentType = "password";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.password-input {
	padding-right: 42px;
}
.password-toggle {
	content: "";
	position: absolute;
	display: block;
	top: 0;
	right: 0;
	width: 44px;
	height: 24px;
	text-align: center;
	cursor: pointer;
	background-repeat: no-repeat;
	background-position: top right 10px;
}
.password-toggle-show {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23b8c2cc' d='M21.948,11.684C21.927,11.617,19.633,5,12,5s-9.927,6.617-9.948,6.684c-0.069,0.205-0.069,0.428,0,0.633	C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684C22.018,12.111,22.018,11.889,21.948,11.684z M12,16c-2.21,0-4-1.79-4-4	s1.79-4,4-4s4,1.79,4,4S14.21,16,12,16z'/%3E%3Ccircle fill='%23b8c2cc' cx='12' cy='12' r='2'/%3E%3C/svg%3E");
}
.password-toggle-hide {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23b8c2cc' d='M8.014 12.135l-3.83-3.83c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19c.946 0 1.81-.103 2.598-.281l-2.732-2.732C9.766 15.915 8.085 14.234 8.014 12.135zM21.948 12.316c.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319C21.002 15.022 21.935 12.358 21.948 12.316zM13.925 12.511c.177-.666.012-1.402-.511-1.925s-1.259-.688-1.925-.511L9.98 8.566C10.574 8.215 11.259 8 12 8c2.21 0 4 1.79 4 4 0 .741-.215 1.426-.566 2.02L13.925 12.511z'/%3E%3C/svg%3E");
}
.password-toggle.form-control-lg {
	background-position: 10px 12px;
}
</style>