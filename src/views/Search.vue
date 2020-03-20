<template>
	<div>
		<h3 class="mb-3">Search</h3>
		<hr>
		<base-search placeholder="Search here..." search-class="col-6" v-model="search"></base-search>

		<h6 class="mb-3 mt-5">How to use</h6>
		<prism-editor :code="code" :line-numbers="true" language="html" class="rounded-lg mb-3"></prism-editor>

		<prism-editor :code="jsCode" :line-numbers="true" language="js" class="rounded-lg mb-3"></prism-editor>
	</div>
</template>

<script>
const code = `<base-search placeholder="Search here..." search-class="col-6" v-model="search"></base-search>`;

const jsCode = `// import in your component file
import BaseSearch from "@/components/BaseSearch.vue";

export default {
	data() {
		return {
			search: ""
		};
	},
	components: {
		BaseSearch
	}
};`;

import BaseSearch from "@/components/BaseSearch.vue";

export default {
	data() {
		return {
			code: code,
			jsCode: jsCode,
			search: ""
		};
	},
	components: {
		BaseSearch
	}
};
</script>

<style lang="scss" scoped>
</style>