<template>
	<div>
		<h3 class="mb-3">Spinner</h3>
		<hr>

		<h6 class="mt-5 mb-3">Example 1 - Spinner in Card</h6>
		<div class="row">
			<div class="col-md-6">
				<base-card with-header class="spinner spinner-md spinner-blue">
					<template slot="header">Spinner in Card</template>
					<div class="d-flex justify-content-center align-items-center" style="min-height: 200px"></div>
				</base-card>
			</div>
			<div class="col-md-6">
				<base-card with-header class="spinner spinner-md spinner-red">
					<template slot="header">Spinner in Card</template>
					<div class="d-flex justify-content-center align-items-center" style="min-height: 200px"></div>
				</base-card>
			</div>
		</div>

		<h6 class="mt-5 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="css" :code="cssCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `// just apply the classes 'spinner spinner-md spinner-blue' conditionally
<base-card with-header class="spinner spinner-md spinner-blue">
	<template slot="header">Spinner in Card</template>
	<div class="d-flex justify-content-center align-items-center" style="min-height: 200px"></div>
</base-card>

<base-card with-header class="spinner spinner-md spinner-red">
	<template slot="header">Spinner in Card</template>
	<div class="d-flex justify-content-center align-items-center" style="min-height: 200px"></div>
</base-card>
`;

const cssCode = `// Doughnut Spinner
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  position: relative;
  overflow: hidden;
}

.spinner:before {
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
  opacity: 0.95;
}

.spinner:after {
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
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left-color: inherit;
  animation: spinner 0.65s linear infinite;
  z-index: 2;
}

.spinner-md:after {
  border-width: 3px;
  width: 32px !important;
  height: 32px !important;
}

.spinner-blue {
  border-left-color: #3490DC !important;
}
.spinner-red {
	border-left-color: #e3342f !important;
}
`;

import BaseCard from "@/components/BaseCard";

export default {
	components: {
		BaseCard
	},
	data() {
		return {
			code: code,
			cssCode: cssCode
		};
	}
};
</script>

<style lang="scss" scoped>
.spinner-red {
	border-left-color: #e3342f !important;
}
</style>