<template>
	<div>
		<div
			id="app"
			class="wrapper"
			:class="{ 'is-open': toggleMenu == true}"
			ref="sitewrapper"
			@click="closeOverlay()"
		>
			<div class="d-md-flex">
				<div class="sidebar-nav bg-white shadow pr-4" :class="{ 'is-open': toggleMenu == true}">
					<sidebar-menu :sidebaritems="sidebaritems" class="sidebar-theme">
						<template slot="sidebar-brand">
							<a
								href="#/"
								class="text-decoration-none h5 mb-0 py-3 px-4 d-block text-dark"
								style="letter-spacing: -0.05em"
							>
								<span class="text-danger font-weight-bold">Sumato</span> Design.
							</a>
						</template>
					</sidebar-menu>

					<p class="mt-5 px-4 small">
						2019 &copy; Sumato Globaltech
						<br>Made in Guwahati.
					</p>
				</div>

				<div class="col-md-9 col-lg-9 mx-auto">
					<nav class="navbar fixed-top navbar-light bg-white shadow-sm border-0">
						<button
							type="button"
							class="btn pl-0 py-0 btn-transparent btn-sm d-block d-md-none text-muted"
							@click.prevent="toggleMenu = !toggleMenu"
						>
							<svg
								id="i-menu"
								viewBox="0 0 32 32"
								width="32"
								height="32"
								fill="none"
								stroke="currentcolor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
							>
								<path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
							</svg>
						</button>
						<a class="navbar-brand mr-auto mx-1 text-dark" href="#/" style="letter-spacing: -0.05em">
							<span class="text-danger font-weight-bold">Sumato</span> Design.
						</a>

						<div class="ml-auto small">v 1.0.0</div>
					</nav>

					<div class="main-content pt-3 pb-5">
						<router-view/>
					</div>
				</div>
			</div>
		</div>
		<portal-target name="modal-destination">
			<!--
  This component can be located anwhere in your App.
  The slot content of the above portal component will be rendered here.
			-->
		</portal-target>
	</div>
</template>


<script>
import SidebarMenu from "@/components/SidebarMenu";

export default {
	components: {
		SidebarMenu
	},

	data() {
		return {
			toggleMenu: false,

			sidebaritems: [
				{
					title: "Basic",
					links: [
						{
							to: "/",
							title: "Introduction"
							// roles: [],
						},
						{
							to: "/colors",
							title: "Colors"
						},
						{
							to: "/typography",
							title: "Typography"
						},
						{
							to: "/icons",
							title: "Icons"
						}
					]
				},
				{
					title: "Components",
					links: [
						{
							to: "/alerts",
							title: "Alerts",
							roles: []
							// icon: "home"
						},
						{
							to: "/badge",
							title: "Badge",
							roles: []
							// icon: "home"
						},
						{
							to: "/button",
							title: "Button",
							roles: []
							// icon: "home"
						},
						{
							to: "/card",
							title: "Card",
							roles: []
							// icon: "home"
						},
						{
							to: "/checkbox",
							title: "Checkbox",
							roles: []
							// icon: "home"
						},
						{
							to: "/confirm",
							title: "Confirm",
							roles: []
							// icon: "home"
						},
						{
							to: "/datepicker",
							title: "Datepicker"
						},
						{
							to: "/dropdown",
							title: "Dropdown Menu"
						},
						{
							to: "/empty-states",
							title: "Empty State"
						},
						{
							to: "/input",
							title: "Input"
						},
						{
							to: "/modal",
							title: "Modal"
						},
						{
							to: "/multiselect-simple",
							title: "Multiselect Simple"
						},
						// {
						// 	to: "/",
						// 	title: "List",
						// 	roles: []
						// 	// icon: "home"
						// },
						{
							to: "/radio",
							title: "Radio",
							roles: []
							// icon: "home"
						},
						{
							to: "/search",
							title: "Search",
							roles: []
							// icon: "home"
						},
						{
							to: "/select",
							title: "Select",
							roles: []
							// icon: "home"
						},
						{
							to: "/spinners",
							title: "Spinners",
							roles: []
							// icon: "home"
						},
						{
							to: "/switch",
							title: "Switch",
							roles: []
							// icon: "home"
						},
						{
							to: "/table",
							title: "Table",
							roles: []
						},
						{
							to: "/tags",
							title: "Tags",
							roles: []
							// icon: "home"
						},
						{
							to: "/texteditor",
							title: "Texteditor",
							roles: []
							// icon: "home"
						},
						{
							to: "/toast",
							title: "Toast",
							roles: []
						},
						{
							to: "/uploader",
							title: "Uploader",
							roles: []
						}
					]
				}
			]
		};
	},

	methods: {
		closeOverlay() {
			if (window.matchMedia("(max-width: 576px)").matches) {
				let overlayContainer = this.$refs.sitewrapper;
				if (this.$refs.sitewrapper.className == "wrapper is-open") {
					overlayContainer.addEventListener("click", e => {
						if (
							this.$refs.sitewrapper.className ==
							"wrapper is-open"
						) {
							this.toggleMenu = false;
							console.log("Menu Closed");
						} else {
							this.toggleMenu = true;
							console.log("Menu Opened");
						}
					});
				}
			}
		}
	}
};
</script>

<style lang="scss">
:root {
	--ck-border-radius: 6px;
}
@import "../node_modules/vue-prism-editor/dist/VuePrismEditor.css";
// @import "../node_modules/prismjs/themes/prism-tomorrow.css";
@import "./assets/css/prism-hopscotch.css";

@import "./assets/css/app.scss";

#app {
	font-family: "Inter UI", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
html,
body {
	min-height: 100%;
}
.wrapper {
	position: relative;
}
.wrapper.is-open {
	overflow-y: hidden;
	height: 100vh;
}
.wrapper.is-open::after {
	display: block;
	content: "";
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	overflow-y: hidden;
	height: 100%;
	background: rgba(0, 0, 0, 0.65);
	z-index: 1031;
	user-select: none;
	transition: all 0.15s ease-out;
}
.sidebar-nav {
	box-sizing: border-box;
	display: block;
	position: fixed;
	content: "";
	left: 0;
	top: 0;
	bottom: 0;
	z-index: 1032;
	width: 240px;
	height: 100vh;
	overflow-y: auto;
	border-left: 6px solid lighten(#e3342f, 42%);
}

.main-content {
	margin-top: 84px;
}

@media screen and (max-width: 768px) {
	.sidebar-nav {
		transform: translate3d(-240px, 0, 0);
		transition: transform 0.35s ease-in-out;
	}

	.sidebar-nav.is-open {
		transform: translate3d(0, 0, 0);
	}

	.main-content {
		transform: translate3d(0, 0, 0);
		transition: transform 0.35s ease-in-out;
	}
}
@media screen and (min-width: 768px) {
	.main-content {
		transform: translate3d(120px, 0, 0);
		transition: transform 0.35s ease-in-out;
	}
}

$sidebar-link-color: #3d4852;
$sidebar-link-hover-color: #e3342f;
$sidebar-link-hover-bg: lighten(#e3342f, 42%);

.sidebar-theme .sidebar-title {
	color: #b8c2cc;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	font-size: 0.7rem;
	font-weight: bold;
}
.sidebar-theme .sidebar-link {
	color: $sidebar-link-color !important;
	font-weight: 400;
	font-size: 0.95rem;
	transition: all 0.3s ease;
	text-decoration: none !important;

	&:hover,
	&.router-link-exact-active {
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
		text-decoration: none;
	}

	&:hover {
		background-color: lighten(#e3342f, 45%);
	}

	&.router-link-exact-active {
		color: $sidebar-link-hover-color !important;
		background-color: $sidebar-link-hover-bg;
	}
}
</style>
