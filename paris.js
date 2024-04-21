/* -------------------------------------------------------------------------- */
/*                                    PARIS                                   */
/* -------------------------------------------------------------------------- */

/*
	Icon template: {
		path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
		fillColor: "blue",
		fillOpacity: 0.6,
		strokeWeight: 0,
		rotation: 0,
		scale: 2,
		anchor: new google.maps.Point(0, 20),
	};
*/

const locations = [
	{
		lat: 48.86076632870258,
		lng: 2.33762254968749,
		// content: '<strong>Louvre:</strong> this is the louvre<br>1st arr',
		title: 'Louvre',
		description: 'Famous museum',
		quarter: '1st arr',
		priority: 1
	},
	{
		lat: 48.8590454226668,
		lng: 2.294472126694176,
		// content: '<strong>Eiffel Tower</strong><br>7th arr',
		title: 'Eiffel Tower',
		description: 'Famous landmark',
		quarter: '7th arr',
		priority: 2
	},
	{
		lat: 48.85726492887824,
		lng: 2.312839677647244,
		// content: '<strong>Hotel Invalides</strong><br>7th arr',
		title: 'Hotel Invalides',
		description: 'napoleon',
		quarter: '7th arr',
		priority: 3
	}
];

// const markers = {
// 	redIcon: {
// 		path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
// 		fillColor: "red",
// 		fillOpacity: 0.9,
// 		strokeWeight: 0,
// 		rotation: 0,
// 		scale: 2,
// 		anchor: new google.maps.Point(0, 20),
// 	},
// 	orangeIcon: {
// 		path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
// 		fillColor: "orange",
// 		fillOpacity: 0.6,
// 		strokeWeight: 0,
// 		rotation: 0,
// 		scale: 2,
// 		anchor: new google.maps.Point(0, 20),
// 	},
// 	yellowIcon: {
// 		path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
// 		fillColor: "yellow",
// 		fillOpacity: 0.6,
// 		strokeWeight: 0,
// 		rotation: 0,
// 		scale: 2,
// 		anchor: new google.maps.Point(0, 20),
// 	}
// };

// function determineMarker(priorityLvl) {
// const determineMarker = (priorityLvl) => {
// 	const { redIcon, orangeIcon, yellowIcon } = markers;

// 	if (priorityLvl === 1) {
// 		return redIcon;
// 	} else if (priorityLvl === 2) {
// 		return orangeIcon;
// 	} else if (priorityLvl ===3) {
// 		return yellowIcon;
// 	}
// };

const createHTMLInfoWindow = ({ title, description, quarter}) => `<strong>${title}</strong> ${description}<br><u><i>${quarter}</i></u>`;

function initMap() {
	const markers = {
		redIcon: {
			path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
			// Trying to get rid of check:
			// path: "M-1.547 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
			fillColor: "red",
			fillOpacity: 1,
			strokeWeight: 0,
			rotation: 0,
			scale: 2,
			anchor: new google.maps.Point(0, 20),
		},
		orangeIcon: {
			path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
			fillColor: "orange",
			fillOpacity: 1,
			strokeWeight: 0,
			rotation: 0,
			scale: 2,
			anchor: new google.maps.Point(0, 20),
		},
		yellowIcon: {
			path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
			fillColor: "gold",
			fillOpacity: 1,
			strokeWeight: 0,
			rotation: 0,
			scale: 2,
			anchor: new google.maps.Point(0, 20),
		}
	};
	const map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 48.860102,
			lng: 2.329
		},
		zoom: 12.5,
	});

	for (const location of locations) {
		const { lat, lng, priority } = location;
		const { redIcon, orangeIcon, yellowIcon } = markers;
		const mapMarker = new google.maps.Marker({
			position: {
				lat,
				lng
			},
			map,
			// icon: determineMarker(priority)
			icon: priority === 1 ? redIcon : priority === 2 ? orangeIcon : priority === 3 ? yellowIcon : null

			// label: "A"
			// icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
		});

		const locationWindow = new google.maps.InfoWindow({ content: createHTMLInfoWindow(location) });

		mapMarker.addListener('click', () => {
			locationWindow.open(mapMarker.get('map'), mapMarker);
			setTimeout(() => locationWindow.close(), 5000);
		});
	}
}