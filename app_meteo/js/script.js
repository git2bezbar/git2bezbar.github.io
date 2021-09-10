const weatherIcons = {
    "Rain": "wi wi-day-rain",
    "Clouds": "wi wi-day-cloudy",
    "Clear": "wi wi-day-sunny",
    "Snow": "wi wi-day-snow",
    "Mist": "wi wi-day-fog",
    "Drizzle": "wi wi-day-sleet"
};

console.log(weatherIcons["Rain"]);

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

async function main(withip = true) {

    let ville;

    if (withip) {

        const ip = await fetch('//api.ipify.org?format=json')
            .then(resultat => resultat.json())
            .then(json => json.ip);

        ville = await fetch(`//api.ipstack.com/${ip}?access_key=a26497cc19d6246015585e7431d6b66d`)
            .then(resultat => resultat.json())
            .then(json => json.city);

    }
    else {
        ville = document.querySelector("#ville").textContent;
    }

    const meteo = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${ville}&appid=4a337615020c6ec12925a53f61106167&lang=fr&units=metric`)
        .then(resultat => resultat.json())
        .then(json => json);

    console.log(meteo);
    weatherInfos(meteo);
}

function weatherInfos(data) {
    const ville = data.name;
    const temp = Math.round(data.main.temp);
    const condition = data.weather[0].description;
    const icon = data.weather[0].main;

    document.querySelector("#ville").innerText = ville;
    document.querySelector("#temperature").innerText = temp;
    document.querySelector("#condition").innerText = capitalize(condition);

    document.querySelector("section i.wi").className = weatherIcons[icon];
}

const ville = document.querySelector("#ville");

ville.addEventListener("click", () => {
    ville.contentEditable = true;
});

ville.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        ville.contentEditable = false;
        main(false);
    }
});

main();


