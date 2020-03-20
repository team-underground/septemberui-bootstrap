<template>
	<div>
		<h3 class="mb-3">Colors</h3>
		<hr>

		<div
			class="d-flex align-items-center justify-content-center shadow-sm rounded-lg overflow-hidden mt-5 mb-5"
		>
			<div
				v-for="color in colors"
				:key="color.name"
				:style="{'background-color': color.hex}"
				class="flex-fill px-2 py-4 text-center"
				:class="{'text-light': (color.name == '$gray-800' || color.name == '$gray-700' || color.name == '$gray-600')}"
			>
				<strong class="d-block mb-1 text-monospace">{{ color.name }}</strong>
				<span class="text-monospace">{{ color.hex }}</span>
			</div>
		</div>

		<div
			class="d-flex align-items-center justify-content-center shadow-sm rounded-lg overflow-hidden"
		>
			<div
				v-for="color in baseColors"
				:key="color.name"
				:style="{'background-color': color.hex}"
				class="flex-fill px-2 py-4 text-center"
				:class="{'text-white': color.name != '$light'}"
			>
				<strong class="d-block mb-1 text-monospace">{{ color.name }}</strong>
				<span class="text-monospace">{{ color.hex }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			colors: [
				{
					name: "$gray-100",
					hex: "#ffffff"
				},
				{
					name: "$gray-200",
					hex: "#f8fafc"
				},
				{
					name: "$gray-300",
					hex: "#f1f5f8"
				},
				{
					name: "$gray-400",
					hex: "#dae1e7"
				},
				{
					name: "$gray-500",
					hex: "#b8c2cc"
				},
				{
					name: "$gray-600",
					hex: "#8795a1"
				},
				{
					name: "$gray-700",
					hex: "#606f7b"
				},
				{
					name: "$gray-800",
					hex: "#3d4852"
				},
				{
					name: "$gray-900",
					hex: "#22292f"
				}
			],

			baseColors: [
				{
					name: "$primary",
					hex: "#3490DC"
				},
				{
					name: "$secondary",
					hex: "#8795a1"
				},
				{
					name: "$success",
					hex: "#38C172"
				},
				{
					name: "$info",
					hex: "#4DC0B5"
				},
				{
					name: "$warning",
					hex: "#F6993F"
				},
				{
					name: "$danger",
					hex: "#E3342F"
				},
				{
					name: "$light",
					hex: "#f8fafc"
				},
				{
					name: "$dark",
					hex: "#3D4852"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
</style>