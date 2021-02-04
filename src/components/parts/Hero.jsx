import React from "react";

export default function Hero() {
	return (
		<>
		<div class="card" />
  		<div class="card-header" style={{backgroundColor: "#ff9292", width: "48%", marginLeft: "25%", borderRadius: 5}}>
			{/* awal dropdown */}
			<div class="btn-group">
			<button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Large button
			</button>
			<div class="dropdown-menu">
				...
			</div>
			</div>

			<div class="btn-group">
			<button class="btn btn-secondary btn-lg ml-3" type="button">
				Large button
			</button>
			<button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<span class="sr-only">Toggle Dropdown</span>
			</button>
			<div class="dropdown-menu">
				...
			</div>
			</div>

			<div class="btn-group">
			<button class="btn btn-secondary btn-lg ml-3" type="button">
				Large button
			</button>
			<button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				<span class="sr-only">Toggle Dropdown</span>
			</button>
			<div class="dropdown-menu">
				...
			</div>
			</div>
			{/* akhir dropdown */}
		</div>
		</>
	);
}
