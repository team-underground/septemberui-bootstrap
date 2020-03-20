<template>
	<div>
		<label class="mb-1 d-block">{{ label }}</label>
		<label
			class="align-items-center mb-2 clearfix position-relative"
			:class="[{'d-inline-flex mr-4': stacked == false, 'd-flex w-100': stacked == true}, classes, { 'border-primary': modelValue == option.value && customActive == true && customActiveClass == 'text-primary','border-danger': modelValue == option.value && customActive == true && customActiveClass == 'text-danger', 'border-info': modelValue == option.value && customActive == true && customActiveClass == 'text-info'}]"
			v-for="option in options"
			:key="option.value"
			:for="option.value"
		>
			<template v-if="customActive == false">
				<!-- Input element for the radio button -->
				<input
					:id="option.value"
					type="radio"
					class="check-custom"
					:name="name"
					:checked="modelValue == option.value ? true : false"
					@change="$emit('change', option.value)"
				>
				<!-- Customization element for the radio button -->
				<span class="check-toggle flex-shrink-0" :class="sizeClass"></span>
			</template>

			<template v-else>
				<!-- Input element for the radio button -->
				<input
					:id="option.value"
					type="radio"
					class="check-custom"
					:name="name"
					:checked="modelValue == option.value ? true : false"
					@change="$emit('change', option.value)"
				>
				<span
					class="position-absolute"
					:class="customActiveClass"
					v-if="customActive"
					style="top: 15px; right: 22px; z-index: 1"
				>
					<svg
						v-if="modelValue == option.value"
						xmlns="http://www.w3.org/2000/svg"
						class="fill-current"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.794-5.794l1.414,1.414L10.001,16.413z"
						></path>
					</svg>
				</span>
			</template>

			<span class="ml-2">
				<slot :row="option"></slot>
			</span>
		</label>

		<small v-if="helpText" class="d-block form-text text-muted">{{ helpText }}</small>
	</div>
</template>

<script>
// https://hackernoon.com/hacking-custom-checkboxes-and-radios-5d48230440d
export default {
	name: "BaseRadio",
	model: {
		prop: "modelValue",
		event: "change"
	},

	props: {
		modelValue: {
			type: String,
			default: ""
		},
		name: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		stacked: {
			type: Boolean,
			default: true
		},
		size: {
			type: String,
			default: "medium"
		},
		options: {
			type: [Array, Object]
		},
		helpText: {
			type: String,
			default: ""
		},
		classes: {
			type: String
		},
		customActive: {
			type: Boolean,
			default: false
		},
		customActiveClass: {
			type: String,
			default: "text-primary"
		}
	},

	computed: {
		sizeClass() {
			return {
				medium: this.size == "medium",
				large: this.size == "large"
			};
		}
	}
};
</script>

<style lang="scss" scoped>
/* Styles for hiding the native radio button */
input[type="radio"].check-custom {
	position: absolute;
	left: -10000px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
}

/* Styles for the basic appearance of the custom radio button */
input[type="radio"].check-custom ~ .check-toggle {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	border: 2px solid #969696;
	border-radius: 50%;
	cursor: pointer;
	box-sizing: border-box;
}

/* Styles for the hover state appearance of the custom radio button */
input[type="radio"].check-custom:hover ~ .check-toggle {
	border: 2px solid #4a4a4a;
}

/* Styles for the focus state appearance of the custom radio button */
input[type="radio"].check-custom:focus ~ .check-toggle {
	border-color: #b0d5ff;
	box-shadow: 0 0 0 2px rgba(23, 133, 255, 0.25);
}

/* Styles for the checked state appearance of the custom radio button */
input[type="radio"].check-custom:checked ~ .check-toggle {
	border: 2px solid #1785ff;
}

/* Styles for the checked state appearance of the custom radio button */
input[type="radio"].check-custom:checked ~ .check-toggle::after {
	content: "";
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 50%;
	height: 50%;
	margin: auto;
	position: absolute;
	border-radius: 50%;
	background: #1785ff;
}

/* Size */
.check-toggle.medium {
	width: 1.25rem;
	height: 1.25rem;
}

.check-toggle.large {
	width: 1.5rem;
	height: 1.5rem;
}
</style>