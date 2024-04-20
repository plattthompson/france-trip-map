/* -------------------------------------------------------------------------- */
/*                                  NORMANDY                                  */
/* -------------------------------------------------------------------------- */

const locations = [
	{
		lat: 49.27468858697843,
		lng: -0.7005710406465069,
		content: '<strong>Bayeux Tapestry</strong>'
	},
	{
		lat: 49.374356084790556,
		lng: -0.8693879219011624,
		content: '<strong>Omaha Beach</strong>'
	},
	{
		lat: 48.63604043090275,
		lng: -1.5110070905400175,
		content: '<strong>Mont Saint-Michel</strong>'
	}
];
// 49.1826805912742, -0.37155939404352667
// 48.97406767224453, -0.9578936366554316
function initMap() {
	const map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 48.97406767224453,
			lng: -0.9578936366554316
		},
		zoom: 8.5,
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