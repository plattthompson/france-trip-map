/* -------------------------------------------------------------------------- */
/*                                    PARIS                                   */
/* -------------------------------------------------------------------------- */

const locations = [
	{
		lat: 48.86076632870258,
		lng: 2.33762254968749,
		content: '<strong>Louvre:</strong> this is the louvre<br>1st arr',
		title: '',
		description: ''
	},
	{
		lat: 48.8590454226668,
		lng: 2.294472126694176,
		content: '<strong>Eiffel Tower</strong><br>7th arr',
	},
	{
		lat: 48.85726492887824,
		lng: 2.312839677647244,
		content: '<strong>Hotel Invalides</strong><br>7th arr',
	}
];

function initMap() {
	const map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 48.860102,
			lng: 2.329
		},
		zoom: 12.5,
	});

	for (const location of locations) {
		const { lat, lng, content } = location;
		const placeholder = new google.maps.Marker({
			position: {
				lat,
				lng
			},
			map
		});

		const locationWindow = new google.maps.InfoWindow({ content });

		placeholder.addListener('click', () => {
			locationWindow.open(placeholder.get('map'), placeholder);
		});
	}
}