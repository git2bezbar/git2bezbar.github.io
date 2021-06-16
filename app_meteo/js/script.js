function main() {

    fetch('https://api.ipify.org?format=json')
        .then(resultat => resultat.json())
        .then(json => {
            const ip = json.ip;
            console.log(ip);

            fetch('http://freegeoip.net/json/' + ip)
                .then(resultat => resultat.json())
                .then(json => {
                    const ville = json.city;

                    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + ville)
                        .then(resultat => resultat.json())
                        .then(json => {
                            console.log(json);
                        })
                })
        })
}

main();