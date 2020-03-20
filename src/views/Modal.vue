<template>
	<div>
		<h3 class="mb-3">Modal Dialog</h3>
		<hr>

		<base-button class="btn btn-primary" type="button" @click="showModal = true">Open Modal</base-button>
		<base-button class="btn btn-danger" type="button" @click="showModalDanger = true">Delete Modal</base-button>

		<h6 class="mt-5 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<base-modal :show="showModal" @close="showModal = false">
			<template slot="title">Create New Role</template>
			<template slot="body">
				<base-input
					label="Name of Role"
					help-text="eg. Administrator, Moderator"
					name="role"
					v-model="role.name"
				></base-input>

				<base-input
					label="Description of Role"
					help-text="eg. Brief description of what the role does"
					name="role_description"
					v-model="role.description"
				></base-input>

				<div class="text-right mt-5">
					<base-button class="btn btn-secondary" type="button" @click="showModal = false">Cancel</base-button>
					<base-button class="btn btn-primary" type="button">Create</base-button>
				</div>
			</template>
		</base-modal>

		<base-modal :show="showModalDanger" @close="showModalDanger = false" class="text-center" type="danger">
			<template slot="title">Delete Invoice?</template>
			<template slot="body">
				<p>You will permanently loose your </p>
				<ul class="list-unstyled">
					<li>
						- invoice
					</li>
					<li>
						- balance
					</li>
				</ul> 

				<div class="text-right mt-5">
					<base-button class="btn btn-outline-secondary" type="button" @click="showModalDanger = false">Cancel</base-button>
					<base-button class="btn btn-danger" type="button">Delete Invoice</base-button>
				</div>
			</template> 
		</base-modal>
	</div>
</template>

<script>
const code = `		
<base-button class="btn btn-primary" type="button" @click="showModal = true">Open Modal</base-button>
<base-button class="btn btn-danger" type="button" @click="showModalDanger = true">Open Modal</base-button>

<base-modal :show="showModal" @close="showModal = false">
	<template slot="title">Create New Role</template>
	<template slot="body">
		<base-input
			label="Name of Role"
			help-text="eg. Administrator, Moderator"
			name="role"
			v-model="role.name"
		></base-input>

		<base-input
			label="Description of Role"
			help-text="eg. Brief description of what the role does"
			name="role_description"
			v-model="role.description"
		></base-input>

		<div class="text-right mt-5">
			<base-button class="btn btn-secondary" type="button" @click="showModal = false">Cancel</base-button>
			<base-button class="btn btn-primary" type="button">Create</base-button>
		</div>
	</template>
</base-modal>

<base-modal :show="showModalDanger" @close="showModalDanger = false" class="text-center" type="danger">
	<template slot="title">Delete Invoice?</template>
	<template slot="body">
		<p>You will permanently loose your </p>
		<ul class="list-unstyled">
			<li>
				- invoice
			</li>
			<li>
				- balance
			</li>
		</ul> 

		<div class="text-right mt-5">
			<base-button class="btn btn-outline-secondary" type="button" @click="showModalDanger = false">Cancel</base-button>
			<base-button class="btn btn-danger" type="button">Delete Invoice</base-button>
		</div>
	</template> 
</base-modal>`;

const jsCode = `import BaseModal from "@/components/BaseModal.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
	components: {
		BaseModal,
		BaseButton,
		BaseInput
	},
	data() {
		return {
			showModal: false,
			showModalDanger: false

			role: {
				name: "",
				description: ""
			}
		};
	}
};`;

import BaseModal from "@/components/BaseModal.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

export default {
	components: {
		BaseModal,
		BaseButton,
		BaseInput
	},
	data() {
		return {
			code: code,
			jsCode: jsCode,
			showModal: false,
			showModalDanger: false,

			role: {
				name: "",
				description: ""
			}
		};
	}
};
</script>

<style lang="scss" scoped>
</style>