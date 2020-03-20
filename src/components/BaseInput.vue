<template>
	<div class="form-group">
		<label :for="label" class="mb-1">{{ label }}</label>
		<input
			:type="type"
			class="form-control"
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
			:disabled="disabled"
			:class="hasError ? 'is-invalid' : ''"
			@keydown="$emit('keydown', $event)"
			@blur="$emit('blur', $event)"
			@keyup="$emit('keyup', $event)"
		>
		<small v-if="helpText" class="d-block form-text text-muted">{{ helpText }}</small>
		<div v-if="hasError == true" class="invalid-feedback">
			<slot name="invalid-feedback"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "BaseInput",

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
			type: [String, Number]
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
	}
};
</script>

<style lang="scss" scoped>
</style>