function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 18.958262991786757,
			lng: 72.87800280382048, 
		},
		zoom: 12,

//Replace MAP_ID with your own ones

		mapId: 'MAP_ID',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});

    
	const markers = [
		[
			"1000 Sunny",
			18.935012960731832,
			72.87150010657695,
			'pic/1000sunny.png',
			60,
			60,
		],
		[
			'Apple store',
			19.054280366247756,
			72.85162593790594,
			'pic/apple.png',
			60,
			60,
		],
		[
			'Blackbeard',
			18.940241209358156,
			72.80230011651966,
			'pic/Blackbeard.png',
			60,
			60,
		],
		[
			'shanks',
			18.98943122367488,
			72.92297806285215,
			'pic/shanks.png',
			60,
			60,
		],
		[
			'zune',
			18.970763446677232,
			72.97052827952274,
			'pic/zune.png',
			60,
			60,
		],
		[
			'marine',
			19.027247322710746,
			72.82495943834193,
			'pic/marine.png',
			60,
			60,
		],
		[
			'Baratie',
			19.022541065613044,
			72.7727743803708,
			'pic/Baratie.png',
			60,
			60,
		],
		[
			'moster',
			18.985535508241473,
			72.79285875875037,
			'pic/moster.png', 
			60,
			60,
		],
		[
			'castle',
			19.01182977712812,
			72.8500219956413,
			'pic/castle.png', 
			60,
			60,
		],
		[
			'loboon',
			18.917995412609407,
			72.94100252022743,
			'pic/loboon.png',
			60,
			60,
		],
		['food', 19.01629927462229, 72.86717982246581, 'pic/food.png', 40, 40],
		['food', 19.038694214994518, 72.92125315807783, 'pic/food.png', 38, 42.5],
		['food', 18.9919535260383, 72.8319892389723, 'pic/food.png', 38, 38],
		['food', 18.95494116962553, 72.95644374157135, 'pic/food.png', 38, 38],
		['treasure', 18.962571582140935, 72.93292612847617, 'pic/treasure.png', 28, 28],
		['treasure', 18.971175670995187, 73.02974313790187, 'pic/treasure.png', 28, 28],
		['Law', 18.98253888079952, 72.75817485565716, 'pic/law.png', 40, 40],

	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}
}

