function initialize() {
                                var mapOptions = {
                                    zoom: 17,
                                    scrollwheel: false,
                                    draggable: true,
                                    scaleControl: true,
                                    streetViewControl: false,
                                    center: new google.maps.LatLng(41.037754, 28.930916),
                                    styles: [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#8a969b"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ]};
                                var mapElement = document.getElementById('customMap');
                                var map = new google.maps.Map(mapElement, mapOptions);
                                var marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(41.037754, 28.930916),
                                    map: map,
                                    title: 'Has Örme'
                                });
                            }
                            google.maps.event.addDomListener(window, 'load', initialize);




