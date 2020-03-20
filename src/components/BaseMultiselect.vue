<template>
	<div class="base-multiselect form-group">
		<label :for="label" class="mb-1">{{ label }}</label>
		<input
			ref="input"
			:type="type"
			class="form-control pr-5"
			v-bind="$attrs"
			v-bind:value="value"
			@input="$emit('input', $event.target.value)"
			:disabled="disabled"
			:class="hasError ? 'is-invalid' : ''"
			@keydown.prevent="keydown"
			@blur="blur"
			@focus="focus"
		>
		<small v-if="helpText" class="d-block form-text text-muted">{{ helpText }}</small>
		<div v-if="hasError == true" class="invalid-feedback">
			<slot name="invalid-feedback"></slot>
		</div>

		<!-- Count -->
		<div
			class="base-multiselect-count bg-primary text-white text-center text-sm rounded-pill px-2"
			v-if="value.length > 1"
		>{{ value.length || 0 }}</div>

		<!-- Icon -->
		<div class="base-multiselect-icon text-muted">
			<svg
				v-if="open"
				xmlns="http://www.w3.org/2000/svg"
				class="up fill-current"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M12 7.586l-5.707 5.707 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414z"></path>
			</svg>

			<svg
				v-else
				xmlns="http://www.w3.org/2000/svg"
				class="down fill-current"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
			</svg>
		</div>

		<!-- Dropdown -->
		<ul class="list-group border-light shadow-lg rounded-lg bg-white" v-if="open">
			<li
				class="list-group-item cursor-pointer py-2"
				:class="{ 'text-primary': isChecked(item) }"
				v-for="(item, index) in items"
				:key="index"
				@mousedown.prevent="check(item)"
			>
				<div class="custom-control custom-checkbox cursor-pointer text-truncate mb-0">
					<input
						type="checkbox"
						class="custom-control-input"
						:id="`customCheck-${index}`"
						:checked="isChecked(item)"
					>
					<label class="custom-control-label pl-2" :for="`customCheck-${index}`">{{ item }}</label>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "BaseMultiselect",

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
			type: [String, Number, Array]
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
		},
		items: {
			type: Array,
			required: true
		}
	},

	data() {
		return {
			open: false
		};
	},

	methods: {
		isChecked(item) {
			return this.value.some(s => s === item);
		},
		focus() {
			this.open = true;
			this.$emit("focus");
		},
		blur() {
			this.open = false;
			this.$emit("blur");
		},
		keydown(event) {
			event.preventDefault();
		},
		check(item) {
			let current = Object.assign([], this.value);
			let index = current.indexOf(item);

			if (index > -1) {
				current.splice(index, 1);
			} else {
				current.push(item);
			}

			this.$emit("input", current);
			// this.$refs.input.$el.focus();
		}
	},

	computed: {
		text() {
			return this.value.join(", ");
		}
	}
};
</script>

<style lang="scss" scoped>
.base-multiselect {
	position: relative;

	.form-control.is-invalid {
		background-position: center right 35px !important;
	}

	.base-multiselect-icon,
	.base-multiselect-count {
		height: 20px;
		line-height: 20px;
		position: absolute;
		top: 40px;
		right: 40px;
	}

	.base-multiselect-count {
		right: 35px;
	}

	.base-multiselect-icon {
		right: 10px;
	}

	.list-group {
		position: absolute;
		top: 110%;
		right: 0;
		left: 0;
		z-index: 1;
		max-height: 280px;
		overflow-y: auto;

		.list-group-item {
			border: 0;
			&:hover {
				background-color: #f1f5f8;
			}
			&:first-child {
				border-top: 0;
			}
		}
	}
}
</style>