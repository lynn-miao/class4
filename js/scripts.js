mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],
    zoom: 2
});

var dummyPolygonGeojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "coordinates": [
            [
              [
                -73.31632592070534,
                44.98237742555523
              ],
              [
                -74.92962933160925,
                45.02512767807886
              ],
              [
                -76.28429626974525,
                44.22933004325685
              ],
              [
                -76.20202426428534,
                43.63630787420604
              ],
              [
                -79.19959002055485,
                43.31785872498412
              ],
              [
                -80.01419988689918,
                42.132309264004476
              ],
              [
                -75.40030409271361,
                41.986721376927136
              ],
              [
                -74.15506388158872,
                40.483785516220934
              ],
              [
                -72.1765927981343,
                40.999250510119424
              ],
              [
                -73.82261923533343,
                40.864752502261695
              ],
              [
                -73.31632592070534,
                44.98237742555523
              ]
            ]
          ],
          "type": "Polygon"
        }
      }
    ]
  }
map.addControl(new mapboxgl.NavigationControl());

// wait!
map.on('load', () => {

    console.log('Loaded!')

    map.addSource('dummyPolygon', {
        "type": "geojson",
        "data": dummyPolygonGeojson
    })

    // add a fill layer
    map.addLayer({
        'id': 'dummyPolygone-fill',
        'type': 'fill',
        'source': 'dummyPolygon',
        'layout': {},
        'paint': {
            'fill-color': '#ccc',
            'fill-opacity': .7,
        }
    }, 'path-pedestrian-label');

    // add a line layer
    map.addLayer({
        'id': 'dummyPolygone-line',
        'type': 'line',
        'source': 'dummyPolygon',
        'layout': {},
        'paint': {
            'line-color': '#000',
            'line-width': 3,
            'line-dasharray':[2,2]
        }
    });

    console.log(
        map.getStyle().layers
    )

})