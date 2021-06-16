function main() {

    fetch('https://api.ipify.org?format=json')
        .then(resultat => resultat.json())
        .then(json => {
            const ip = json.ip;
            console.log(ip);

            fetch('https://freegeoip.net/json/' + ip)
                .then(resultat => resultat.json())
                .then(json => {
                    const ville = json.city;

                    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=8e602b9ea28ed4f9f8fc97a5f6d1105c&lang=fr&units=metric')
                        .then(resultat => resultat.json())
                        .then(json => {
                            console.log(json);
                        })
                })
        })
}

main();