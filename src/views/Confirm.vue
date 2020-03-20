<template>
	<div>
		<h3 class="mb-3">Confirm Dialog</h3>
		<hr>

		<base-button class="btn btn-danger" type="button" @click="showConfirmModal = true">Confirm Delete?</base-button>

		<h6 class="mt-5 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<base-confirm :show="showConfirmModal" @close="showConfirmModal = false">
			<template slot="title">Confirm Delete?</template>
			<template slot="body">
				<p>After deleting you cannot retrieve back the data. Delete your data now?</p>

				<div class="text-right mt-5">
					<base-button class="btn btn-secondary" type="button" @click="showConfirmModal = false">Cancel</base-button>
					<base-button class="btn btn-danger" type="button">Yes, delete!</base-button>
				</div>
			</template>
		</base-confirm>
	</div>
</template>

<script>
const code = `<base-button class="btn btn-danger" type="button" @click="showConfirmModal = true">Confirm Delete?</base-button>

<base-confirm :show="showConfirmModal" @close="showConfirmModal = false">
	<template slot="title">Confirm Delete?</template>
	<template slot="body">
		<p>After deleting you cannot retrieve back the data. Delete your data now?</p>

		<div class="text-right mt-5">
			<base-button class="btn btn-secondary" type="button" @click="showConfirmModal = false">Cancel</base-button>
			<base-button class="btn btn-danger" type="button">Yes, delete!</base-button>
		</div>
	</template>
</base-confirm>`;

const jsCode = `import BaseConfirm from "@/components/BaseConfirm.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
	components: {
		BaseConfirm,
		BaseButton
	},
	data() {
		return {
			showConfirmModal: false
		};
	}
};`;

import BaseConfirm from "@/components/BaseConfirm.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
	components: {
		BaseConfirm,
		BaseButton
	},
	data() {
		return {
			code: code,
			jsCode: jsCode,
			showConfirmModal: false
		};
	}
};
</script>

<style lang="scss" scoped>
</style>