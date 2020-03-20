<template>
	<div>
		<h3 class="mb-3">Datepicker</h3>
		<hr>

		<base-alert>
			<strong>Note:</strong> All datepicker inputs must have a default value.
		</base-alert>

		<p class="mb-5">
			<strong>V-Calendar</strong> An elegant calendar and datepicker plugin for Vuejs. Documentation available at
			<a
				href="https://vcalendar.io/"
				target="_blank"
			>https://vcalendar.io/</a>
		</p>

		<div class="mb-3">
			<h6 class="mb-3">Example 1: Basic Datepicker</h6>
			<v-date-picker v-model="date" :input-props="inputProps"></v-date-picker>
		</div>

		<h6 class="mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<div class="mb-3">
			<h6 class="mb-3">Eaxmple 2: Range Datepicker</h6>
			<v-date-picker
				:columns="$screens({ default: 1, lg: 2 })"
				mode="range"
				:min-date="new Date()"
				v-model="range"
				:input-props="inputPropsRange"
			></v-date-picker>
		</div>

		<h6 class="mb-3">How to use</h6>
		<prism-editor language="html" :code="code2" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>

		<prism-editor language="js" :code="jsCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<v-date-picker v-model="date" :input-props="inputProps"></v-date-picker>`;
const code2 = `<v-date-picker
	:columns="$screens({ default: 1, lg: 2 })"
	mode="range"
	:min-date="new Date()"
	v-model="range"
	:input-props="inputPropsRange"
></v-date-picker>`;

const jsCode = `// main.js
import VCalendar from "v-calendar";
Vue.use(VCalendar, {});

// in your component file
export default {
	data() {
		return {
			date: new Date(2019, 3, 15)

			// CSS Styling
			inputProps: {
				id: "datepicker",
				class: "form-control shadow-sm col-6 col-md-2",
				readonly: true
			},

			range: {
				start: new Date(2019, 3, 10),
				end: new Date(2019, 3, 17)
			},
			inputPropsRange: {
				id: "datepicker",
				class: "form-control shadow-sm col-8",
				readonly: true
			}
		};
	}
};`;

import BaseAlert from "@/components/BaseAlert.vue";

export default {
	data() {
		return {
			code: code,
			code2: code2,
			jsCode: jsCode,
			date: new Date(2019, 3, 15), // April 15th, 2019

			inputProps: {
				id: "datepicker",
				class: "date-input form-control col-6 col-md-2",
				readonly: true
			},

			range: {
				start: new Date(2019, 3, 10),
				end: new Date(2019, 3, 17)
			},
			inputPropsRange: {
				id: "datepicker",
				class: "date-input form-control col-8 col-md-4",
				readonly: true
			}
		};
	},

	components: {
		BaseAlert
	}
};
</script>

<style>
.date-input {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23b8c2cc' d='M3,22h18c0.553,0,1-0.448,1-1V4c0-0.552-0.447-1-1-1h-4V2h-2v1H9V2H7v1H3C2.447,3,2,3.448,2,4v17C2,21.552,2.447,22,3,22z M4,20V10h16v10H4z M7,5v1h2V5h6v1h2V5h3v3H4V5H7z'/%3E%3Cpath fill='%23b8c2cc' d='M7 12H9V14H7zM7 16H9V18H7zM11 12H13V14H11zM11 16H13V18H11zM15 12H17V14H15zM15 16H17V18H15z'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: left calc(0.375em + 0.275rem) center;
	padding-left: 42px !important;
}
.date-input.form-control-lg {
	background-position: 8px 12px;
}
</style>