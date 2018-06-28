const axios = require('axios');

const getLugarLatLong = async(direccion) => {

    let encodeURL = encodeURI( direccion );

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);
    if( respuesta.data.status == 'ZERO_RESULTS' ){
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }

    let formattedAddress = respuesta.data.results[0].formatted_address;
    let location = respuesta.data.results[0].geometry.location;

    return {
        direccion: formattedAddress,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getLugarLatLong
}

