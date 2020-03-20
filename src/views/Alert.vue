<template>
	<div>
		<h3 class="mb-3">Alerts</h3>
		<hr>

		<h6 class="mb-3">Examples without Icon</h6>
		<base-alert
			:with-icon="false"
		>Info. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe. Hic assumenda suscipit, iste enim similique odio veritatis officiis exercitationem dolore ullam explicabo obcaecati quia distinctio.</base-alert>

		<base-alert
			:with-icon="false"
			variant="success"
		>Info. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe. Hic assumenda suscipit, iste enim similique odio veritatis officiis exercitationem dolore ullam explicabo obcaecati quia distinctio.</base-alert>

		<h6 class="mb-3">How to use</h6>
		<prism-editor :code="code" language="html" class="rounded-lg mb-3"></prism-editor>

		<h6 class="mb-3 mt-5">Examples with Icon</h6>
		<base-alert>Info. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe. Hic assumenda suscipit, iste enim similique odio veritatis officiis exercitationem dolore ullam explicabo obcaecati quia distinctio.</base-alert>

		<base-alert
			variant="danger"
		>Danger. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe. Hic assumenda suscipit, iste enim similique odio veritatis officiis exercitationem dolore ullam explicabo obcaecati quia distinctio.</base-alert>

		<base-alert
			variant="success"
		>Success. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe. Hic assumenda suscipit, iste enim similique odio veritatis officiis exercitationem dolore ullam explicabo obcaecati quia distinctio.</base-alert>

		<h6 class="mb-3 mt-5">How to use</h6>
		<prism-editor :code="code2" language="html" class="rounded-lg mb-3"></prism-editor>
		<prism-editor :code="jsCode" language="js" class="rounded-lg"></prism-editor>
	</div>
</template>

<script>
const code = `<base-alert
	:with-icon="false"
>Info. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe.</base-alert>`;

const code2 = `<base-alert>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe</base-alert>

<base-alert
	:with-icon="false"
>Info. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe. Hic assumenda suscipit, iste enim similique odio veritatis officiis exercitationem dolore.</base-alert>

<base-alert
	variant="danger"	
>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe</base-alert>

<base-alert
	variant="success"
>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nobis velit necessitatibus saepe</base-alert>`;

const jsCode = `import BaseAlert from "@/components/BaseAlert.vue";

export default { 
	components: {
		BaseAlert
	}
}`;

import BaseAlert from "@/components/BaseAlert.vue";

export default {
	data() {
		return {
			code: code,
			code2: code2,
			jsCode: jsCode
		};
	},

	components: {
		BaseAlert
	}
};
</script>

<style lang="scss" scoped>
</style>
