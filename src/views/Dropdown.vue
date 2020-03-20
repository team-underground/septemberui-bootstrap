<template>
	<div>
		<h3 class="mb-3">Dropdown Menu</h3>
		<hr>

		<h6 class="mt-5 mb-3">Example 1 - Dropdown menu</h6>

		<div
			class="d-flex bg-white align-items-center px-4 py-3 shadow justify-content-between rounded-lg"
		>
			<div>
				<base-dropdown arrow-align="left" align="left" class="mr-2" :icon="true">
					<template slot="dropdown-title">John Wick</template>
					<template slot="dropdown-items">
						<div>
							<strong class="text-truncate d-block text-base">John Wick Boogie</strong>
							<span class="d-block text-sm">@johnwickboogie</span>
						</div>
						<div class="border-top border-light my-2 mx-n3"></div>
						<a class="d-block py-1 font-weight-normal text-sm" href="#">Notifications</a>
						<a class="d-block py-1 font-weight-normal text-sm" href="#">Profile & Account</a>
						<a class="d-block py-1 font-weight-normal text-sm" href="#">Help & Feedback</a>
						<div class="border-top border-light my-2 mx-n3"></div>
						<a class="d-block py-1 font-weight-normal text-sm" href="#">Admin Panel</a>
						<a class="d-block py-1 font-weight-normal text-sm" href="#">Logout</a>
					</template>
				</base-dropdown>
			</div>

			<div>
				<base-dropdown arrow-align="right" align="right">
					<template slot="dropdown-title">
						<div class="bg-primary rounded-circle d-block icon-32 mr-3 text-center text-white">
							<eva-icon name="person" fill="currentColor"></eva-icon>
						</div>
					</template>
					<template slot="dropdown-items">
						<div>
							<strong class="text-truncate d-block text-base">John Wick Boogie</strong>
							<span class="d-block text-sm">@boogiemanjohn</span>
						</div>
						<div class="border-top border-width-1px border-light my-2 mx-n3"></div>
						<a class="d-block py-1 text-link font-weight-normal text-sm" href="#">Notifications</a>
						<a class="d-block py-1 text-link font-weight-normal text-sm" href="#">Profile & Account</a>
						<a class="d-block py-1 text-link font-weight-normal text-sm" href="#">Help & Feedback</a>
						<div class="border-top border-width-1px border-light my-2 mx-n3"></div>
						<a class="d-block py-1 text-link font-weight-normal text-sm" href="#">Admin Panel</a>
						<a class="d-block py-1 text-link font-weight-normal text-sm" href="#">Logout</a>
					</template>
				</base-dropdown>
			</div>
		</div>

		<h6 class="mt-5 mb-3">Example 2 - Dropdown menu in card</h6>
		<div class="row">
			<div class="col-md-6">
				<base-card with-header>
					<template slot="header">Dropdown Menu with Right Arrow</template>
					<template slot="header-action">
						<base-dropdown arrow-align="right" align="right">
							<template slot="dropdown-title">
								<eva-icon name="more-horizotnal" fill="#ccc" class="cursor-pointer"></eva-icon>
							</template>
							<template slot="dropdown-items">
								<a class="d-block py-1 text-base font-weight-normal" href="#">Details</a>
								<a class="d-block py-1 text-base font-weight-normal" href="#">Edit</a>
								<a class="d-block py-1 text-base font-weight-normal" href="#">Create</a>
							</template>
						</base-dropdown>
					</template>
					<img
						class="img-fluid"
						src="https://quickchart.io/chart?width=500&height=300&c={type:'bar',data:{labels:['January','February','March','April', 'May'], datasets:[{label:'Dogs',data:[50,60,70,180,190]},{label:'Cats',data:[100,200,300,400,500]}]}}"
					>
				</base-card>
			</div>
			<div class="col-md-6">
				<base-card with-header>
					<template slot="header">Dropdown Menu with Left Arrow</template>
					<template slot="header-action">
						<base-dropdown arrow-align="left" align="left">
							<template slot="dropdown-title">
								<eva-icon name="more-horizotnal" fill="#ccc" class="cursor-pointer"></eva-icon>
							</template>
							<template slot="dropdown-items">
								<a class="d-block py-1 text-base font-weight-normal" href="http://google.com">Details</a>
								<a class="d-block py-1 text-base font-weight-normal" href="#">Edit</a>
								<a class="d-block py-1 text-base font-weight-normal" href="#">Create</a>
							</template>
						</base-dropdown>
					</template>
					<img
						class="img-fluid"
						src="https://quickchart.io/chart?width=500&height=300&c={type:'bar',data:{labels:['January','February','March','April', 'May'], datasets:[{label:'Dogs',data:[50,60,70,180,190]},{label:'Cats',data:[100,200,300,400,500]}]}}"
					>
				</base-card>
			</div>
		</div>

		<h6 class="mt-5 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<base-dropdown arrow-align="right" align="right">
	<template slot="dropdown-title">
		<div class="bg-primary rounded-circle d-block avatar-40 mr-2"></div>
	</template>
	<template slot="dropdown-items">
		<div>
			<strong class="text-truncate d-block text-base">John Wick Boogie</strong>
			<span class="d-block text-sm">@johnwickboogie</span>
		</div>
		<div class="border-top border-light my-2 mx-n3"></div>
		<a class="d-block py-1 font-weight-normal text-sm" href="#">Notifications</a>
		<a class="d-block py-1 font-weight-normal text-sm" href="#">Profile & Account</a>
		<a class="d-block py-1 font-weight-normal text-sm" href="#">Help & Feedback</a>
		<div class="border-top border-light my-2 mx-n3"></div>
		<a class="d-block py-1 font-weight-normal text-sm" href="#">Admin Panel</a>
		<a class="d-block py-1 font-weight-normal text-sm" href="#">Logout</a>
	</template>
</base-dropdown>

// Dropdown with left arrow
<base-dropdown arrow-align="left" align="left">
	<template slot="dropdown-title">
		<eva-icon name="more-horizotnal" fill="#ccc" class="cursor-pointer"></eva-icon>
	</template>
	<template slot="dropdown-items">
		<a class="d-block py-1 text-base font-weight-normal" href="#">Details</a>
		<a class="d-block py-1 text-base font-weight-normal" href="#">Edit</a>
		<a class="d-block py-1 text-base font-weight-normal" href="#">Create</a>
	</template>
</base-dropdown>

// Dropdown with right arrow
<base-dropdown arrow-align="right" align="right">
	<template slot="dropdown-title">
		<eva-icon name="more-horizotnal" fill="#ccc" class="cursor-pointer"></eva-icon>
	</template>
	<template slot="dropdown-items">
		<a class="d-block py-1 text-base font-weight-normal" href="#">Details</a>
		<a class="d-block py-1 text-base font-weight-normal" href="#">Edit</a>
		<a class="d-block py-1 text-base font-weight-normal" href="#">Create</a>
	</template>
</base-dropdown>
`;

const jsCode = `import BaseDropdown from "@/components/BaseDropdown";

export default {
	components: {
		BaseDropdown
	}
};`;

import BaseDropdown from "@/components/BaseDropdown";
import BaseCard from "@/components/BaseCard";

export default {
	components: {
		BaseDropdown,
		BaseCard
	},
	data() {
		return {
			code: code,
			jsCode: jsCode
		};
	}
};
</script>

<style lang="scss" scoped>
</style>