<template>
	<div
		v-click-outside="{
			handler: 'closeDropdown'
		}"
		class="position-relative d-inline-block"
		:class="{ 'arrow-left': arrowAlign == 'left', 'arrow-right': arrowAlign == 'right' }"
	>
		<div
			role="button"
			class="d-inline-block select-none cursor-pointer"
			@click.prevent="showDropDown = !showDropDown"
		>
			<div class="d-flex align-items-center base-dropdown-button">
				<div class="mr-1">
					<slot name="dropdown-title"></slot>
				</div>
				<span v-if="icon">
					<svg
						v-if="showDropDown"
						class="d-inline-block fill-current text-muted"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
					>
						<path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path>
					</svg>
					<svg
						v-else
						class="d-inline-block text-muted fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
					>
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
					</svg>
				</span>
			</div>
		</div>
		<transition name="slide-fade">
			<div
				class="base-dropdown position-absolute mt-1 z-1800 bg-white rounded-lg shadow px-3 py-3 arrow"
				v-show="showDropDown"
				:class="{ 'left': align == 'left', 'right': align == 'right' }"
			>
				<slot name="dropdown-items"></slot>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "BaseDropdown",
	props: {
		icon: {
			type: Boolean,
			default: false
		},
		arrowAlign: {
			type: String
		},
		align: {
			type: String,
			default: "left"
		}
	},
	data() {
		return {
			showDropDown: false
		};
	},
	methods: {
		closeDropdown() {
			this.showDropDown = false;
		}
	}
};
</script>

<style scoped>
.z-1800 {
	z-index: 1800;
}
.slide-fade-enter-active {
	transition: all 0.3s ease;
}
.slide-fade-leave-active {
	transition: all 0.2s ease;
}
.slide-fade-enter {
	transform: translateY(-20px);
	opacity: 0;
}
.slide-fade-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}

.base-dropdown {
	min-width: 180px;
}

.base-dropdown.left {
	left: 0;
}
.base-dropdown.right {
	right: 0;
}

.arrow {
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
	filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, 0.12));
}
.arrow:before {
	border: 10px solid;
	border-color: transparent transparent #fff;
	content: "";
	left: 50%;
	margin-left: -10px;
	position: absolute;
	top: -18px;
}
.arrow-right .arrow:before {
	left: auto !important;
	right: 24px !important;
}
.arrow-left .arrow:before {
	right: auto !important;
	left: 24px !important;
}
</style>