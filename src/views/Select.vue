<template>
	<div>
		<h3 class="mb-3">Select</h3>
		<hr>

		<div class="row mt-4">
			<div class="col-md-4 mb-3">
				<label class="mb-1">With Disabled Search</label>
				<vue-cool-select
					disable-search
					v-model="selected"
					:items="['Vue.js','React']"
					:input-for-text-class="{'form-control': true }"
					placeholder="Please select an item"
				></vue-cool-select>
			</div>
			<div class="col-md-4 mb-3">
				<label class="mb-1">With Search</label>
				<vue-cool-select
					v-model="selected"
					:items="['Vue.js','React']"
					:input-for-text-class="{'form-control': true }"
					placeholder="Please select an item"
				></vue-cool-select>
			</div>
			<div class="col-md-4 mb-3">
				<label class="mb-1">With Validation</label>
				<vue-cool-select
					v-model="selected"
					:items="['Vue.js','React']"
					placeholder="Please select an item"
					:input-for-text-class="{'is-invalid': isInvalid == true, 'form-control': true }"
					:successful="isInvalid && errors['selected'] ? false : false"
					:error-message="isInvalid && errors['selected'] ? errors['selected'][0] : null"
				></vue-cool-select>
			</div>
		</div>

		<h6 class="mt-4 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="css" :code="cssCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<vue-cool-select
	disable-search
	v-model="selected"
	:items="['Vue.js','React']"
	placeholder="Please select an item"
	:input-for-text-class="{'is-invalid': isInvalid == true, 'form-control': true }"
	:successful="isInvalid && errors['selected'] ? false : false"
	:error-message="isInvalid && errors['selected'] ? errors['selected'][0] : null"
></vue-cool-select>`;

const jsCode = `// main.js
import VueSelect from "vue-cool-select";
Vue.use(VueSelect, {
	theme: "bootstrap"
});

// in component file
import { VueCoolSelect } from "vue-cool-select";

export default {
	data() {
		return {
			selected: null,

			errors: {
				selected: ["Field is required"]
			}
		};
	},

	components: {
		VueCoolSelect
	},

	computed: {
		isInvalid() {
			return Object.keys(this.errors).length > 0 ? true : false;
		}
	}
};`;

const cssCode = `.IZ-select {
	.IZ-select__input-wrap {
		margin-bottom: 5px;
	}
	.IZ-select__input,
	.IZ-select__menu {
		border-radius: 6px !important;
	}
	.IZ-select__input,
	.IZ-select__input.IZ-select__input--has-error {
		border-width: 2px !important;
	}
	.IZ-select__input.IZ-select__input--focused,
	.IZ-select__input.IZ-select__input--focused.IZ-select__input--has-error {
		box-shadow: none !important;
	}

	.IZ-select__input.IZ-select__input--has-error input,
	.IZ-select__error {
		color: #e3342f !important;
	}
	.IZ-select__error {
		margin-top: 0.25rem;
	}
}`;

import { VueCoolSelect } from "vue-cool-select";

export default {
	data() {
		return {
			code: code,
			jsCode: jsCode,
			cssCode: cssCode,
			selected: null,

			errors: {
				selected: ["Field is required"]
			}

			// errors: {}
		};
	},

	components: {
		VueCoolSelect
	},

	computed: {
		isInvalid() {
			return Object.keys(this.errors).length > 0 ? true : false;
		}
	}
};
</script>

<style lang="scss">
@import "../assets/css/_variables.scss";

.IZ-select {
	.IZ-select__input-wrap {
		margin-bottom: 5px;
	}

	.IZ-select__input input.form-control.is-invalid {
		background-position: center right 10px !important;
	}

	.IZ-select__input,
	.IZ-select__menu {
		border-radius: $border-radius !important;
	}
	.IZ-select__input,
	.IZ-select__input.IZ-select__input--has-error {
		border-width: 2px !important;
	}
	.IZ-select__input.IZ-select__input--focused,
	.IZ-select__input.IZ-select__input--focused.IZ-select__input--has-error {
		box-shadow: none !important;
	}

	.IZ-select__input.IZ-select__input--has-error input,
	.IZ-select__error {
		color: $danger !important;
	}
	.IZ-select__error {
		margin-top: 0.25rem;
	}
}
</style>