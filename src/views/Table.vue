<template>
	<div>
		<h3 class="mb-3">Table</h3>
		<hr>

		<h6 class="mt-5 mb-3">Example 1 - Simple Table</h6>
		<div class="table-responsive mb-5 table-custom-styled rounded">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Role</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h6 class="mt-5 mb-3">Example 2 - Table with Heading 1</h6>
		<div class="table-responsive mb-5 table-custom-styled rounded">
			<div class="px-4 py-2 d-md-flex justify-content-md-between align-items-md-center">
				<h5 class="mb-md-0">
					Contacts
					<small class="text-muted ml-2">Some sub-headings here..</small>
				</h5>
				<button type="button" class="btn mb-0 btn-success text-white d-inline-flex align-items-center">
					<eva-icon name="plus" animation="pulse" fill="#fff" class="mr-1"></eva-icon>Add
				</button>
			</div>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Role</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h6 class="mt-5 mb-3">Example 3 - Table with Heading 2</h6>
		<div class="d-md-flex justify-content-md-between align-items-md-center mb-3">
			<h5 class="mb-md-0">
				Contacts
				<small class="text-muted ml-2">Some sub-headings here..</small>
			</h5>
			<button type="button" class="btn mb-0 btn-success text-white d-inline-flex align-items-center">
				<eva-icon name="plus" animation="pulse" fill="#fff" class="mr-1"></eva-icon>Add
			</button>
		</div>
		<div class="mb-5 table-responsive table-custom-styled rounded table-td-align-middle">
			<table class="table">
				<thead>
					<tr>
						<th scope="col">Role</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Phone</th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
					<tr>
						<td>Boogie Man</td>
						<td>John Wick</td>
						<td>john@wick.test</td>
						<td>+91 123456 1234</td>
						<td class="text-md-right">
							<eva-icon name="more-horizotnal" animation="pulse" fill="#8795a1"></eva-icon>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h6 class="mt-5 mb-3">Example 4 - Table with Fixed Column</h6>
		<div class="bg-white rounded shadow overflow-hidden">
			<div class="table-fixed-column">
				<div class="table-fixed-column-scroller">
					<table class="table table-borderless mb-0">
						<thead>
							<tr>
								<th class="table-sticky-col">Name</th>
								<th>Number</th>
								<th>Position</th>
								<th>Height</th>
								<th>Born</th>
								<th>Salary</th>
								<th>Prior to NBA/Country</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="table-sticky-col">DeMarcus Cousins</td>
								<td>15</td>
								<td>C</td>
								<td>6'11"</td>
								<td>08-13-1990</td>
								<td>$4,917,000</td>
								<td>Kentucky/USA</td>
							</tr>
							<tr>
								<td class="table-sticky-col">Isaiah Thomas</td>
								<td>22</td>
								<td>PG</td>
								<td>5'9"</td>
								<td>02-07-1989</td>
								<td>$473,604</td>
								<td>Washington/USA</td>
							</tr>
							<tr>
								<td class="table-sticky-col">Ben McLemore</td>
								<td>16</td>
								<td>SG</td>
								<td>6'5"</td>
								<td>02-11-1993</td>
								<td>$2,895,960</td>
								<td>Kansas/USA</td>
							</tr>
							<tr>
								<td class="table-sticky-col">Marcus Thornton</td>
								<td>23</td>
								<td>SG</td>
								<td>6'4"</td>
								<td>05-05-1987</td>
								<td>$7,000,000</td>
								<td>Louisiana State/USA</td>
							</tr>
							<tr>
								<td class="table-sticky-col">Jason Thompson</td>
								<td>34</td>
								<td>PF</td>
								<td>6'11"</td>
								<td>06-21-1986</td>
								<td>$3,001,000</td>
								<td>Rider/USA</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<h6 class="mt-5 mb-3">How to use</h6>
		<prism-editor language="html" :code="code" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
		<prism-editor language="css" :code="cssCode" :line-numbers="true" class="rounded-lg mb-4"></prism-editor>
	</div>
</template>

<script>
const code = `<div class="bg-white rounded shadow overflow-hidden">
	<div class="table-fixed-column">
		<div class="table-fixed-column-scroller">
			<table class="table table-borderless mb-0">
				<thead>
					<tr>
						<th class="table-sticky-col">Name</th>
						<th>Number</th>
						<th>Position</th>
						<th>Height</th>
						<th>Born</th>
						<th>Salary</th>
						<th>Prior to NBA/Country</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="table-sticky-col">DeMarcus Cousins</td>
						<td>15</td>
						<td>C</td>
						<td>6'11"</td>
						<td>08-13-1990</td>
						<td>$4,917,000</td>
						<td>Kentucky/USA</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>`;

const cssCode = `.table-fixed-column {
	position: relative;
}
.table-fixed-column::after {
	content: "";
	display: block;
	position: absolute;
	width: 60px;
	height: 100%;
	right: 0;
	top: 0;
	bottom: 0;
	background: linear-gradient(to right, transparent, white);
}
.table-fixed-column thead th {
	background-color: #f8fafc;
	border: none;
	padding: 10px 24px;
	text-align: left;
	white-space: nowrap;
	font-size: 0.75rem;
	text-transform: uppercase;
	color: #3d4852;
}
.table-fixed-column tbody td {
	border-top: solid 1px #f1f5f8;
	padding: 10px 24px;
	white-space: nowrap;
}
.table-fixed-column-scroller {
	margin-left: 180px;
	overflow-x: scroll;
	overflow-y: visible;
	padding-bottom: 5px;
}
.table .table-sticky-col {
	left: 0;
	position: absolute;
	top: auto;
	width: 180px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

@media screen and (max-width: 480px) {
	.table .table-sticky-col {
		border-right: solid 1px #f1f5f8;
	}
}`;

export default {
	data() {
		return {
			code: code,
			cssCode: cssCode
		};
	}
};
</script>

<style>
.table-custom-styled {
	background: white;
	/* overflow: hidden; */
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.table-custom-styled .table {
	margin-bottom: 0;
}

.table-custom-styled.table-td-align-middle td {
	vertical-align: middle;
}

.table-custom-styled thead th {
	border-top: 0;
	border-bottom: 0;
	background-color: rgba(52, 67, 75, 0.03);
}
.table-custom-styled thead tr th:first-child,
.table-custom-styled tbody tr th:first-child,
.table-custom-styled tbody tr td:first-child {
	padding-left: 1.5rem;
}
.table-custom-styled thead tr th:last-child,
.table-custom-styled tbody tr td:last-child {
	padding-right: 1.5rem;
}
.table-custom-styled thead tr th,
.table-custom-styled tbody tr td {
	padding-left: 1.25rem;
	padding-right: 1.25rem;
}
.table-custom-styled th,
.table-custom-styled td {
	border-top: 1px solid #f1f5f8;
}
.table-custom-styled .table > thead > tr > th,
.table-custom-styled .table > tfoot > tr > th {
	font-size: 0.75rem;
	font-weight: 700;
	position: relative;
	text-transform: uppercase;
	letter-spacing: 0.04rem;
	color: #3d4852;
}

.table-fixed-column {
	position: relative;
}
.table-fixed-column::after {
	content: "";
	display: block;
	position: absolute;
	width: 60px;
	height: 100%;
	right: 0;
	top: 0;
	bottom: 0;
	background: linear-gradient(to right, transparent, white);
}

.table-fixed-column thead th {
	background-color: #f8fafc;
	border: none;
	padding: 10px 24px;
	text-align: left;
	white-space: nowrap;
	font-size: 0.75rem;
	text-transform: uppercase;
	color: #3d4852;
}
.table-fixed-column tbody td {
	border-top: solid 1px #f1f5f8;
	padding: 10px 24px;
	white-space: nowrap;
}
.table-fixed-column-scroller {
	margin-left: 180px;
	overflow-x: scroll;
	overflow-y: visible;
	padding-bottom: 5px;
	/* width: 300px; */
}
.table .table-sticky-col {
	left: 0;
	position: absolute;
	top: auto;
	width: 180px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

@media screen and (max-width: 480px) {
	.table .table-sticky-col {
		/* border-left: solid 1px #f1f5f8; */
		border-right: solid 1px #f1f5f8;
	}
}
</style>