<template>
	<!-- <portal to="modal-destination"> -->
		<transition name="modal">
			<div class="modal-mask" @click="close" v-show="show">
				<div class="modal-container my-5 p-4" @click.stop :class="{'border-top-4 border-danger': type && type == 'danger'}">
					<div class="mb-4" style="margin-top:-50px;" v-show="type && type == 'danger'"> 
						<div class="text-center">
							<span class="rounded-circle bg-danger d-flex align-items-center justify-content-center mx-auto" style="width:50px;height:50px;">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M5 8v12c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2V8c0 0-.447 0-1 0H6C5.447 8 5 8 5 8zM14 11h2v8h-2V11zM8 11h2v8H8V11zM16 6L21 6 21 4 16.618 4 15 2 9 2 7.382 4 3 4 3 6 8 6z"/></svg>
							</span> 
						</div> 
					</div>
					<h5 class="font-weight-bold">
						<slot name="title"></slot>
					</h5>
					<slot name="body"></slot>
				</div>
			</div>
		</transition>
	<!-- </portal> -->
</template>

<script>
export default {
	name: "BaseModal",

	props: {
		show: {
			type: Boolean,
			default: false
        },
        type: {
            type: String,
			default: null 
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
.border-top-4 {
    border-top: 4px solid #dee2e6;
} 
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

@media screen and (min-width: 720px) {
	.modal-container {
		max-width: 480px;
	}
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