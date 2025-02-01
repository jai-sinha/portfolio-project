const col1 = [
	{ src: "../pics/z_drifting.jpg", alt: "350 and 370zs drifting" },
	{ src: "../pics/s13_drift.jpg", alt: "s13 drifting" },
	{ src: "../pics/e36_vertical_woods.jpg", alt: "e36 in woods vertical, really wanted this to make the @bmwclassic instagram but they were hating"},
	{ src: "../pics/ryan_shadow.jpg", alt: "ryan's shadow"},
	{ src: "../pics/hanna_doubleexposed.jpg", alt: "double-exposed, an accident actually"},
	{ src: "../pics/nsx_interior.jpg", alt: "interior of nsx... need"}
];

const col2 = [
	{ src: "../pics/918_film_rear.jpg", alt: "like 5 million dollars in cars: 458 speciale, 918, daytona, safari 911 from front to back" },
	{ src: "../pics/dominique_vertical_shinyrings.jpg", alt: "dom with shiny rings vertical" },
	{ src: "../pics/e90_legion_edited.jpg", alt: "edited out half the background, e90 m3"},
	{ src: "../pics/e36_e9_mercedes_film.jpg", alt: "old german sports cars, monterey" },
	{ src: "../pics/rsspyder_film_frontquarter.jpg", alt: "favorite race car ever, porsche rs spyder" },
	{ src: "../pics/e36_frontquarter_leaves.jpg", alt: "e36 in some fall leaves" }
];

const col3 = [
	{ src: "../pics/hanna_film_vertical_greenhouse.jpg", alt: "hanna in a greenhouse" },
	{ src: "../pics/991_wingstack_closeup.jpg", alt: "991 turbo closeup" },
	{ src: "../pics/rsspyder_film_jetwing.jpg", alt: "wings on wings" },
	{ src: "../pics/cayman_interior.jpg", alt: "interior of cayman s... peep the carpet" },
	{ src: "../pics/e9_film_vertical_frontquarter.jpg", alt: "e9 'batmobile' front quarter" },
	{ src: "../pics/e36_film_rearquarter_legion.jpg", alt: "e36 rear quarter view" }
];

const photos = new Map([
	[1, col1],
	[2, col2],
	[3, col3]
]);

// filenames are relative to being called from index.html, not script.js
const mainImages = [
	{ src: "pics/s13_drift.jpg", alt: "s13 drifting" },
	{ src: "pics/e36_e9_film_rearquarter.jpg", alt: "e36 ltw and e9 'batmobile'" },
	{ src: "pics/hanna_film_pacificabeach.jpg", alt: "hanna in pacifica" },
	{ src: "pics/hanna_doubleexposed.jpg", alt:"double-exposed, an accident actually" }
];

let index = 0;

function changeMainImage() {
	const mainImage = document.getElementById("mainImage");
	mainImage.src = mainImages[index].src;
	mainImage.alt = mainImages[index].alt;
	index = (index + 1) % mainImages.length;
}

function preloadImages() {
	photos.forEach((column) => {
		column.forEach((item) => {
			img = new Image();
			img.src = item.src; // preload the image by setting the src
		});
	});
}

function displayImagesInGallery() {
	photos.forEach((column, key) => {
			const col = document.getElementById(`col-${key}`);
			if (col) {
				column.forEach((item) => {
					const img = new Image();
					img.src = item.src;
					img.alt = item.alt;
					img.classList.add("img-fluid");
					img.loading = "lazy" // lazy load gallery pics bc there are so many

					// create anchor element to pop images out in new tabs onclick
					const anchor = document.createElement('a');
					anchor.href = item.src;
					anchor.target = "_blank";
					anchor.classList.add("portfolio_item");
					anchor.appendChild(img);

					col.appendChild(anchor);
				});
			}
	});
}