<template>
	<div class="form-group">
		<label :for="label" class="mb-1">{{ label }}</label>
		<input
			:type="type"
			class="form-control"
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value.replace(/[^0-9]/g, ''))"
			:disabled="disabled"
			:class="(hasError || validationError) ? 'is-invalid' : ''"
			@keydown="$emit('keydown', $event)"
			@blur="$emit('blur', $event)"
			@keyup="$emit('keyup', $event)"
		>

		<div v-if="(hasError == true || validationError == true)" class="invalid-feedback">
			<slot name="invalid-feedback"></slot>
			<span v-if="validationError">{{ validationMessage }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "BaseInputPhonenumber",

	inheritAttrs: false,

	props: {
		label: {
			type: String
		},
		type: {
			type: String,
			default: "text"
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
		}
	},

	data() {
		return {
			inputValue: "",
			validationError: false,
			validationMessage: "Phone no. is invalid"
		};
	},

	mounted() {
		this.$on("input", e => {
			this.inputValue = e;
		});

		this.$on("keydown", e => {
			this.isNumeric(e);
		});

		this.$on("blur", e => {
			this.checkValidPhoneNumber();
		});
	},

	methods: {
		checkValidPhoneNumber() {
			if (this.inputValue.length == 10 || this.inputValue.length > 10) {
				let phoneRegex = /^[6789]\d{9}$/;
				let isPhoneValid = phoneRegex.test(this.inputValue);

				if (!isPhoneValid) {
					this.validationError = true;
				} else {
					this.validationError = false;
				}
			}
		},

		isNumeric($event) {
			console.log($event);

			let keyCode = $event.keyCode ? $event.keyCode : $event.which;

			// only allow number
			// 8 is Backspace
			// 46 is dot
			let validkeyCodes = [8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
			if (!validkeyCodes.includes(keyCode)) {
				$event.preventDefault();
				this.validationError = true;
				this.validationMessage = "";
				this.validationMessage = "Please enter a numeric value";
			} else {
				this.validationError = false;
				this.validationMessage = "";
			}
		}
	}
};
</script>

<style lang="scss" scoped>
</style>