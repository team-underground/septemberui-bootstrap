<template>
	<div>
		<h3 class="mb-3">Empty States</h3>
		<hr>

		<div class="row mt-5">
			<div class="col-md-6 align-items-stretch mb-4 d-md-flex">
				<empty-state>
					<div class="icon-64 bg-blue-100 text-primary rounded-circle text-center mx-auto">
						<eva-icon name="person" fill="currentColor" width="28" height="28"></eva-icon>
					</div>

					<h4 class="mt-4 mb-1">No users found.</h4>
					<p>You have not created any users yet!</p>
					<base-button class="btn btn-primary rounded-lg d-inline-flex align-items-center">
						<eva-icon name="plus" fill="currentColor" class="mr-1"></eva-icon>Create New User
					</base-button>
				</empty-state>
			</div>
			<div class="col-md-6 align-items-stretch mb-4 d-md-flex">
				<empty-state></empty-state>
			</div>

			<div class="col-md-6 align-items-stretch mb-4 d-md-flex">
				<empty-state>
					<div class="icon-64 bg-blue-100 text-primary rounded-circle text-center mx-auto">
						<eva-icon name="wifi-off" fill="currentColor" width="28" height="28"></eva-icon>
					</div>

					<h4 class="mt-4 mb-1">Offline.</h4>
					<p>Please connect to the internet and try again!</p>
				</empty-state>
			</div>
		</div>
	</div>
</template>

<script>
import BaseButton from "@/components/BaseButton";
import EmptyState from "@/components/EmptyState";

export default {
	components: {
		BaseButton,
		EmptyState
	}
};
</script>

<style lang="scss" scoped>
</style>