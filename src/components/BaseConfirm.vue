<template>
	<portal to="modal-destination">
		<transition name="modal">
			<div class="modal-mask" @click="close" v-show="show">
				<div class="modal-container d-flex my-5 p-4" @click.stop>
					<div
						class="bg-danger modal-icon rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0 mr-3 mr-md-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="fill-current text-white"
							width="32"
							height="32"
							viewBox="0 0 24 24"
						>
							<path
								d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"
							></path>
						</svg>
					</div>
					<div class="flex-1">
						<h5 class="font-weight-bold">
							<slot name="title"></slot>
						</h5>
						<slot name="body"></slot>
					</div>
				</div>
			</div>
		</transition>
	</portal>
</template>

<script>
export default {
	name: "BaseConfirm",

	props: {
		show: {
			type: Boolean,
			default: false
		}
	},

	methods: {
		close() {
			this.$emit("close");
		}
	},

	mounted() {
		document.addEventListener("keydown", e => {
			if (this.show && e.keyCode == 27) {
				this.close();
			}
		});
	}
};
</script>

<style lang="scss">
.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	transition: opacity 0.3s ease;
}

.modal-container {
	max-width: 380px;
	margin-left: auto;
	margin-right: auto;
	// padding: 20px 30px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: inherit;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.modal-icon {
	width: 48px;
	height: 48px;
}

@media screen and (min-width: 720px) {
	.modal-container {
		max-width: 480px;
	}
	// .modal-icon {
	// 	width: 54px;
	// 	height: 54px;
	// }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>