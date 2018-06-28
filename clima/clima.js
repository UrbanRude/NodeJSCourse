

const axios = require('axios');

const getClima = async( lat,lng ) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6ce3b3eec2bf8c4622e2b4e35ddc9d68`);

    return respuesta.data.main.temp;

}

module.exports = {
    getClima
}