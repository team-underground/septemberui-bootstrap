<template>
	<button v-on="$listeners" :disabled="disableButton" :class="btnClass">
		<slot/>
	</button>
</template>

<script>
export default {
	name: "BaseButton",
	props: {
		disabled: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			loading: false,
			disableButton: this.disabled
		};
	},

	methods: {
		startLoading() {
			this.loading = true;
			this.disableButton = true;
		},
		stopLoading() {
			this.loading = false;
			this.disableButton = false;
		}
	},

	computed: {
		btnClass() {
			return {
				"base-spinner": this.loading == true
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.btn + .btn {
	margin-left: 1em;
}

// Spinner
@keyframes spinner {
	to {
		transform: rotate(360deg);
	}
}

.base-spinner {
	position: relative;
	overflow: hidden;
}

.base-spinner:before {
	content: "";
	box-sizing: border-box;
	position: absolute;
	background-color: inherit;
	width: 100%;
	height: 100%;
	display: block;
	z-index: 1;
	top: 0;
	left: 0;
}

.base-spinner:after {
	content: "";
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 20px;
	height: 20px;
	margin-top: -10px;
	margin-left: -10px;
	border-radius: 50%;
	border: 2px solid rgba(255, 255, 255, 0.75);
	border-top-color: inherit;
	animation: spinner 0.6s linear infinite;
	z-index: 2;
}
</style>