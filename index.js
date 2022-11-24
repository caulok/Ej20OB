let Marker, map;

function initMap() {
    const ubicacion1 = { lat: 45, lng: 3 };
    const ubicacion2 = { lat: 45, lng: 3 };
    const ubicacion3 = { lat: 45, lng: 3 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: ubicacion,
    })

    const Marker = new google.maps.Marker({
        position: ubicacion,
        map,
        title: 'Posición inicial'
    })

    geoPosiciona()
}

const geoPosiciona = () => {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = {timeout: 60000}
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
        console.log(watchPos)
    } else {
        alert("Tu navegador no admite la geolocalización")
    }
}
const centraMapa = (position) =>{
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos)
    Marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

const onError = (error) => {
    console.error(error)
}