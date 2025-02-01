const col1 = [
	{ src: "../pics/z-drifting.jpg", alt: "350 and 370zs drifting" },
	{ src: "../pics/s13-drift.jpg", alt: "s13 drifting" },
	{ src: "../pics/e36-woods-vert.jpg", alt: "e36 in woods vertical, really wanted this to make the @bmwclassic instagram but they were hating"},
	{ src: "../pics/hanna-doubleexposed.jpg", alt: "double-exposed, an accident actually"},
	{ src: "../pics/nsx-interior.jpg", alt: "interior of nsx... need"},
	{ src: "../pics/e36-e9-rearquarter.jpg", alt: "e36 ltw and e9 batmobile" },
	{ src: "../pics/yosemite-falls-vert.jpg", alt: "waterfall in yosemite, super green water" }
];

const col2 = [
	{ src: "../pics/918-rear.jpg", alt: "like 5 million dollars in cars: 458 speciale, 918, daytona, safari 911 from front to back" },
	{ src: "../pics/dominique-shinyrings-vert.jpg", alt: "dom with shiny rings vertical" },
	{ src: "../pics/e90-legion-edited.jpg", alt: "edited out half the background, e90 m3"},
	{ src: "../pics/e36-e9-mercedes-film.jpg", alt: "old german sports cars, monterey" },
	{ src: "../pics/rsspyder-frontquarter.jpg", alt: "favorite race car ever, porsche rs spyder" },
	{ src: "../pics/singer-vert.jpg", alt: "singer 911 rear end" },
	{ src: "../pics/yosemite-gray.jpg", alt: "yosemite on film, looks b/w but not!" }
];

const col3 = [
	{ src: "../pics/hanna-greenhouse-vert.jpg", alt: "hanna in a greenhouse" },
	{ src: "../pics/991-wingstack-closeup.jpg", alt: "991 turbo closeup" },
	{ src: "../pics/rsspyder-jetwing.jpg", alt: "wings on wings" },
	{ src: "../pics/cayman-interior.jpg", alt: "interior of cayman s... peep the carpet" },
	{ src: "../pics/e9-frontquarter-vert.jpg", alt: "e9 'batmobile' front quarter" },
	{ src: "../pics/e36-rearquarter-legion.jpg", alt: "e36 rear quarter view" },
	{ src: "../pics/amg-shiny.jpg", alt: "super shiny amg gt logo" },
	{ src: "../pics/ltw-rearquarter.jpg", alt: "e36 ltw rear quarter view" }
];

const photos = new Map([
	[1, col1],
	[2, col2],
	[3, col3]
]);

// filenames are relative to being called from index.html, not script.js
const mainImages = [
	{ src: "pics/s13-drift.jpg", alt: "s13 drifting" },
	{ src: "pics/e36-e9-rearquarter.jpg", alt: "e36 ltw and e9 'batmobile'" },
	{ src: "pics/hanna-pacifica.jpg", alt: "hanna in pacifica" },
	{ src: "pics/hanna-doubleexposed.jpg", alt:"double-exposed, an accident actually" }
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