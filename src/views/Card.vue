<template>
	<div>
		<h3>Cards</h3>
		<hr class="mb-5">

		<div class="row mb-5">
			<div class="col-md-3 d-flex align-items-stretch mb-2">
				<base-card>
					<div class="d-flex align-items-center">
						<div class="flex-fill mr-3">
							<span
								class="text-uppercase text-muted tracking-wide text-xs mb-2 d-block font-weight-bold"
							>Orders</span>
							<div class="h2 mb-0">73.46k</div>
						</div>
						<div class="icon-48 rounded-circle bg-blue-100 flex-shrink-0 text-center text-primary">
							<eva-icon name="layers" animation="pulse" fill="currentColor"></eva-icon>
						</div>
					</div>
				</base-card>
			</div>
			<div class="col-md-3 d-flex align-items-stretch mb-2">
				<base-card>
					<div class="d-flex align-items-center">
						<div class="flex-fill mr-3">
							<span
								class="text-uppercase text-muted tracking-wide text-xs mb-2 d-block font-weight-bold"
							>Likes</span>
							<div class="h2 mb-0">89.4k</div>
						</div>
						<div class="icon-48 rounded-circle bg-red-100 flex-shrink-0 text-center text-danger">
							<eva-icon name="heart" animation="pulse" fill="currentColor"></eva-icon>
						</div>
					</div>
				</base-card>
			</div>
			<div class="col-md-3 d-flex align-items-stretch mb-2">
				<base-card>
					<div class="d-flex align-items-center">
						<div class="flex-fill mr-3">
							<span
								class="text-uppercase text-muted tracking-wide text-xs mb-2 d-block font-weight-bold"
							>Customers</span>
							<div class="h2 mb-0">58.39k</div>
						</div>
						<div class="icon-48 rounded-circle bg-green-100 flex-shrink-0 text-center text-success">
							<eva-icon name="people" animation="pulse" fill="currentColor"></eva-icon>
						</div>
					</div>
				</base-card>
			</div>
			<div class="col-md-3 d-flex align-items-stretch mb-2">
				<base-card>
					<div class="d-flex align-items-center">
						<div class="flex-fill mr-3">
							<span
								class="text-uppercase text-muted tracking-wide text-xs mb-2 d-block font-weight-bold"
							>Sales</span>
							<div class="h2 mb-0">467</div>
						</div>
						<div class="icon-48 rounded-circle bg-yellow-100 flex-shrink-0 text-center text-warning">
							<eva-icon name="shopping-cart" animation="pulse" fill="currentColor"></eva-icon>
						</div>
					</div>
				</base-card>
			</div>
		</div>

		<div class="row mb-5">
			<div class="col-md-4">
				<base-card with-header>
					<template slot="header">Bar Chart</template>
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
			<div class="col-md-4">
				<base-card with-header>
					<template slot="header">Pie Chart</template>
					<template slot="header-action">
						<eva-icon name="more-horizotnal" fill="#ccc" class="cursor-pointer"></eva-icon>
					</template>
					<img
						class="img-fluid"
						src="https://quickchart.io/chart?c={type:'doughnut',data:{labels:['January','February','March','April', 'May'], datasets:[{data:[50,60,70,180,190]}]}}"
					>
				</base-card>
			</div>
			<div class="col-md-4">
				<base-card with-header>
					<template slot="header">Radial Gauge</template>
					<template slot="header-action">
						<eva-icon name="more-horizotnal" fill="#ccc" class="cursor-pointer"></eva-icon>
					</template>
					<img
						class="img-fluid"
						src="https://quickchart.io/chart?c={type:'radialGauge',data:{datasets:[{data:[70],backgroundColor:'green'}]}}"
					>
				</base-card>
			</div>
		</div>

		<div class="row mb-5">
			<div class="col-md-4 d-flex align-items-stretch">
				<base-card with-header>
					<template slot="header">Events</template>
					<template slot="header-action">
						<a href="#" class="small">
							See all
							<eva-icon name="arrow-ios-forward" fill="currentColor" height="18" width="18"></eva-icon>
						</a>
					</template>
					<div
						class="list-group list-group-flush overflow-hidden"
						style="margin-left: -18px; margin-right: -18px;"
					>
						<a
							href="https://uxagenda.com/event/front-end-design-conference-2019"
							class="list-group-item list-group-item-action"
						>
							<div class="h6 text-truncate mb-1">Front End Design Conference 2019</div>
							<div class="text-truncate small text-muted">Conference in St. Petersburg, United States</div>
							<div class="text-muted small">24 - 26 Apr, 2019</div>
						</a>

						<a href="#" class="list-group-item list-group-item-action">
							<div class="h6 text-truncate mb-1">Smashing Conference San Francisco 2019</div>
							<div class="text-truncate small text-muted">Conference in San Francisco, United States</div>
							<div class="text-muted small">16 - 17 Apr, 2019</div>
						</a>

						<a href="#" class="list-group-item list-group-item-action">
							<div class="h6 text-truncate mb-1">Pixel Up! 2019</div>
							<div class="text-truncate small text-muted">Conference in Cape Town, South Africa</div>
							<div class="text-muted small">11 - 13 Mar, 2019</div>
						</a>

						<a href="#" class="list-group-item list-group-item-action">
							<div class="h6 text-truncate mb-1">Smashing Conference Toronto 2019</div>
							<div class="text-truncate small text-muted">Conference in Toronto, Canada</div>
							<div class="text-muted small">25 - 26 Jun, 2019</div>
						</a>
					</div>
				</base-card>
			</div>

			<div class="col-md-4 d-flex align-items-stretch">
				<base-card with-header with-footer>
					<template slot="header">Events</template>

					<div
						class="list-group list-group-flush overflow-hidden"
						style="margin-left: -18px; margin-right: -18px;"
					>
						<a
							href="https://uxagenda.com/event/front-end-design-conference-2019"
							class="list-group-item list-group-item-action"
						>
							<div class="h6 text-truncate mb-1">Front End Design Conference 2019</div>
							<div class="text-truncate small text-muted">Conference in St. Petersburg, United States</div>
							<div class="text-muted small">24 - 26 Apr, 2019</div>
						</a>

						<a href="#" class="list-group-item list-group-item-action">
							<div class="h6 text-truncate mb-1">Smashing Conference San Francisco 2019</div>
							<div class="text-truncate small text-muted">Conference in San Francisco, United States</div>
							<div class="text-muted small">16 - 17 Apr, 2019</div>
						</a>

						<a href="#" class="list-group-item list-group-item-action">
							<div class="h6 text-truncate mb-1">Smashing Conference Toronto 2019</div>
							<div class="text-truncate small text-muted">Conference in Toronto, Canada</div>
							<div class="text-muted small">25 - 26 Jun, 2019</div>
						</a>
					</div>

					<template slot="footer">
						<a href="#" class="d-flex justify-content-between align-items-center">
							See all events
							<eva-icon name="arrow-ios-forward" fill="currentColor" height="18" width="18"></eva-icon>
						</a>
					</template>
				</base-card>
			</div>

			<div class="col-md-4 d-flex align-items-stretch">
				<base-card with-header with-footer>
					<template slot="header">Task Report</template>

					<div class="d-flex w-100 mb-3">
						<div class="flex-fill mr-3">
							<div class="h6 text-truncate mb-0">John Wick</div>
							<small class="text-muted">Manager</small>
						</div>
						<div style="width: 40%">
							<div class="d-flex w-100 justify-content-between">
								<small class="d-block text-xs text-muted">9 of 42</small>
								<div class="text-xs text-primary">25%</div>
							</div>
							<div class="progress rounded-pill" style="height: 4px;">
								<div
									class="progress-bar"
									role="progressbar"
									style="width: 25%;"
									aria-valuenow="25"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
					</div>

					<div class="d-flex w-100 mb-3">
						<div class="flex-fill mr-3">
							<div class="h6 text-truncate mb-0">Summer Doe</div>
							<small class="text-muted">Developer</small>
						</div>
						<div style="width: 40%">
							<div class="d-flex w-100 justify-content-between">
								<small class="d-block text-xs text-muted">18 of 24</small>
								<div class="text-xs text-primary">78%</div>
							</div>
							<div class="progress rounded-pill" style="height: 4px;">
								<div
									class="progress-bar"
									role="progressbar"
									style="width: 78%;"
									aria-valuenow="25"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
					</div>

					<div class="d-flex w-100 mb-3">
						<div class="flex-fill mr-3">
							<div class="h6 text-truncate mb-0">Winter Doe</div>
							<small class="text-muted">Designer</small>
						</div>
						<div style="width: 40%">
							<div class="d-flex w-100 justify-content-between">
								<small class="d-block text-xs text-muted">24 of 42</small>
								<div class="text-xs text-primary">62%</div>
							</div>
							<div class="progress rounded-pill" style="height: 4px;">
								<div
									class="progress-bar"
									role="progressbar"
									style="width: 62%;"
									aria-valuenow="25"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
					</div>

					<div class="d-flex w-100 mb-3">
						<div class="flex-fill mr-3">
							<div class="h6 text-truncate mb-0">John Wick</div>
							<small class="text-muted">Manager</small>
						</div>
						<div style="width: 40%">
							<div class="d-flex w-100 justify-content-between">
								<small class="d-block text-xs text-muted">9 of 42</small>
								<div class="text-xs text-primary">25%</div>
							</div>
							<div class="progress rounded-pill" style="height: 4px;">
								<div
									class="progress-bar"
									role="progressbar"
									style="width: 25%;"
									aria-valuenow="25"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
					</div>

					<div class="d-flex w-100">
						<div class="flex-fill mr-3">
							<div class="h6 text-truncate mb-0">Summer Doe</div>
							<small class="text-muted">Developer</small>
						</div>
						<div style="width: 40%">
							<div class="d-flex w-100 justify-content-between">
								<small class="d-block text-xs text-muted">18 of 24</small>
								<div class="text-xs text-primary">78%</div>
							</div>
							<div class="progress rounded-pill" style="height: 4px;">
								<div
									class="progress-bar"
									role="progressbar"
									style="width: 78%;"
									aria-valuenow="25"
									aria-valuemin="0"
									aria-valuemax="100"
								></div>
							</div>
						</div>
					</div>

					<template slot="footer">
						<a href="#" class="d-flex justify-content-between align-items-center">
							See all reports
							<eva-icon name="arrow-ios-forward" fill="currentColor" height="18" width="18"></eva-icon>
						</a>
					</template>
				</base-card>
			</div>
		</div>
	</div>
</template>

<script>
import BaseCard from "@/components/BaseCard.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";

export default {
	components: {
		BaseCard,
		BaseDropdown
	}
};
</script>

<style lang="scss" scoped>
</style>