<template>
	<div>
		<h3 class="mb-3">Tags</h3>
		<hr>
		<p>
			<strong>Vue Tag Selector</strong>: an amazing and light vuejs component. Documentation is available at
			<a
				href="http://tomquinonero.com/vue-tag-selector/"
				target="_blank"
			>http://tomquinonero.com/vue-tag-selector/</a>
		</p>

		<tag-selector
			name="Tags"
			v-model="tags"
			:classes="errors['tags'] ? 'theme-material is-invalid' : 'theme-material'"
		/>

		<div v-if="errors['tags']" class="text-danger small form-text">{{ errors['tags'][0] }}</div>

		<div class="alert alert-light shadow-sm my-3">
			<code class="mb-0">{{ tags }}</code>
		</div>

		<h6 class="mb-3 mt-5">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="css" :code="cssCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<tag-selector
	name="Tags"
	v-model="tags"
	:classes="errors['tags'] ? 'theme-material is-invalid' : 'theme-material'"
/>

<div v-if="errors['tags']" class="text-danger small form-text">{{ errors['tags'][0] }}</div>`;

const jsCode = `import TagSelector from "vue-tag-selector";
export default {
	data() {
		return {
			tags: ["Blog", "High-Tech", "Vuejs"],
			errors: {
				// tags: ["Tag is required"]
			}
		};
	},
	components: {
		TagSelector
	}
};`;

const cssCode = `.theme-material .tag-selector--input {
	display: flex;
	min-height: calc(1.5em + 1.1rem + 4px);
	padding: 0.35rem 0.95rem 0 0.95rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #606f7b;
	background-color: #fff;
	background-clip: padding-box;
	border: 2px solid #dae1e7;
	border-radius: 0.375rem;
}
.theme-material.is-invalid .tag-selector--input {
	border-color: #e3342f;
}

.theme-material .tag-selector--item {
	background: #dae1e7;
	color: #606f7b;
	margin-right: 8px;
	padding-left: 12px;
	border-radius: 4px;
}
.theme-material .tag-selector--item:hover {
	background: #8795a1;
	color: #f1f5f8;
}
.theme-material .tag-selector--item:hover .tag-selector--remove {
	color: #fafafa;
}
.theme-material .tag-selector--remove {
	width: 24px;
	height: 24px;
	color: #8795a1;
	margin: 4px 4px;
}
.theme-material .tag-selector--item,
.theme-material .tag-selector-input {
	height: 32px;
	line-height: 32px;
	margin-bottom: 8px;
	font-size: 14px;
}
.theme-material .validation-message {
	color: #a90014;
}`;

import TagSelector from "vue-tag-selector";
export default {
	data() {
		return {
			code: code,
			jsCode: jsCode,
			cssCode: cssCode,
			tags: ["Blog", "High-Tech", "Vuejs"],
			errors: {
				// tags: ["Tag is required"]
			}
		};
	},
	components: {
		TagSelector
	}
};
</script>

<style lang="scss">
.theme-material .tag-selector--input {
	display: flex;
	min-height: calc(1.5em + 1.1rem + 4px);
	padding: 0.35rem 0.95rem 0 0.95rem !important;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #606f7b;
	background-color: #fff;
	background-clip: padding-box;
	border: 2px solid #dae1e7 !important;
	border-radius: 0.375rem;
}
.theme-material.is-invalid .tag-selector--input {
	border-color: #e3342f;
}

.theme-material .tag-selector--item {
	background: #dae1e7;
	color: #606f7b;
	margin-right: 8px !important;
	padding-left: 12px !important;
	border-radius: 4px;
}
.theme-material .tag-selector--item:hover {
	background: #8795a1;
	color: #f1f5f8;
}
.theme-material .tag-selector--item:hover .tag-selector--remove {
	color: #fafafa;
}
.theme-material .tag-selector--remove {
	width: 24px;
	height: 24px;
	color: #8795a1;
	margin: 4px 4px;
}
.theme-material .tag-selector--remove svg {
	display: block !important;
}
.theme-material .tag-selector--item,
.theme-material .tag-selector-input {
	height: 32px;
	line-height: 32px;
	margin-bottom: 8px;
	font-size: 14px;
}
.theme-material .validation-message {
	color: #a90014;
}
</style>