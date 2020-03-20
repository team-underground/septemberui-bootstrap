<template>
	<div class="form-group">
		<label :for="label" class="mb-1">{{ label }}</label>
		<textarea
			:rows="rows"
			ref="textarea"
			type="textarea"
			class="form-control form-textarea"
			:classes="classes"
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
			:disabled="disabled"
			:class="hasError ? 'is-invalid' : ''"
			@keydown="$emit('keydown', $event)"
		></textarea>

		<div class="textarea-stats my-1" v-if="stats">
			<ul class="list-inline small text-muted mb-0">
				<li class="list-inline-item">Lines: {{ linesCount || 0 }}</li>
				<li class="list-inline-item">Words: {{ wordsCount || 0 }}</li>
				<li class="list-inline-item">Characters: {{ charactersCount || 0 }}</li>
			</ul>
		</div>

		<small v-if="helpText" class="d-block form-text text-muted">{{ helpText }}</small>

		<div v-if="hasError == true" class="invalid-feedback">
			<slot name="invalid-feedback"></slot>
		</div>
	</div>
</template>
 
<script>
import autosize from "autosize";
export default {
	name: "BaseTextarea",

	inheritAttrs: false,

	props: {
		label: {
			type: String
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
		},
		stats: {
			type: Boolean,
			default: false
		},
		rows: {
			type: Number,
			default: 4
		},
		classes: {
			type: [String, Array]
		}
	},

	data() {
		return {
			textareaValue: ""
		};
	},

	mounted() {
		this.$on("input", e => {
			this.textareaValue = e;
		});

		setTimeout(() => {
			autosize(this.$refs.textarea);
		}, 0);

		// on update
		// setTimeout(() => {
		// 	autosize.update(this.$refs.textarea);
		// }, 0);
	},

	watch: {
		textareaValue() {}
	},

	computed: {
		linesCount() {
			if (this.textareaValue) {
				// Count the number of new line characters
				return this.textareaValue.split(/\r\n|\r|\n/).length;
			} else {
				return 0;
			}
		},

		wordsCount() {
			if (this.textareaValue) {
				let s = this.textareaValue;
				// Turn new line cahracters into white-spaces
				s = s.replace(/\n/g, " ");
				// Exclude start and end white-spaces
				s = s.replace(/(^\s*)|(\s*$)/gi, "");
				// Turn 2 or more duplicate white-spaces into 1
				s = s.replace(/\s\s+/gi, " ");
				// Return the number of spaces
				return s.split(" ").length;
			} else {
				return 0;
			}
		},

		charactersCount() {
			if (this.textareaValue) {
				return this.textareaValue.split("").length;
			} else {
				return 0;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
</style>