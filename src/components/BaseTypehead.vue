<template>
	<div class="form-group base-typehead">
		<label :for="label" class="mb-1">{{ label }}</label>
		<input
			ref="input"
			:type="type"
			class="form-control"
			v-bind="$attrs"
			v-bind:value="value"
			:disabled="disabled"
			:class="hasError ? 'is-invalid' : ''"
			@keydown.enter.prevent="enter"
			@keydown.down.prevent="down"
			@keydown.up.prevent="up"
			@blur="blur"
			@focus="focus"
			@input="input"
		>
		<small v-if="helpText" class="d-block form-text text-muted">{{ helpText }}</small>
		<div v-if="hasError == true" class="invalid-feedback">
			<slot name="invalid-feedback"></slot>
		</div>

		<!-- Dropdown -->
		<ul class="list-group list-group-flush shadow rounded-lg py-1 bg-white" v-if="open">
			<template v-if="matchFound">
				<li
					class="list-group-item cursor-pointer py-2"
					v-for="(suggestion, index) in matches"
					:key="index"
					:active="index === current"
					@mousedown.prevent="click(index)"
				>{{ suggestion }}</li>
			</template>
			<template v-else>
				<li class="list-group-item cursor-pointer py-2">No match found.</li>
			</template>
		</ul>
	</div>
</template>

<script>
export default {
	name: "BaseTypehead",

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
			current: -1,
			focused: false
		};
	},

	methods: {
		input(event) {
			this.$emit("input", event.target.value);

			this.items.map(item => {
				if (item.toLowerCase() === event.target.value.toLowerCase()) {
					this.$emit("input", item);
				}
			});
		},

		click(index) {
			this.$emit("input", this.matches[index]);
			// this.$refs.input.$el.focus();
		},

		enter() {
			if (this.current >= 0) {
				this.$emit("input", this.matches[this.current]);
			}
		},

		up() {
			if (this.current >= 0) {
				this.current--;
			}
		},

		down() {
			if (this.current < this.matches.length - 1) {
				this.current++;
			}
		},

		focus() {
			this.focused = true;
			this.$emit("focus");
		},

		blur() {
			this.focused = false;
			this.$emit("blur");
		}
	},

	computed: {
		matches() {
			return this.items.filter(str => {
				return str.toLowerCase().indexOf(this.value.toLowerCase()) >= 0;
			});
		},

		matchFound() {
			return this.matches.length > 0 ? true : false;
		},

		open() {
			return (
				this.value.length > 0 &&
				this.focused &&
				!this.items.some(item => item === this.value)
			);
		}
	}
};
</script>

<style lang="scss" scoped>
.base-typehead {
	position: relative;

	.list-group {
		position: absolute;
		top: 105%;
		right: 0;
		left: 0;
		z-index: 1;
		max-height: 200px;
		overflow-y: auto;

		.list-group-item {
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