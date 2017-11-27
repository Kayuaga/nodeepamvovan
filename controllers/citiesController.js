import City from '../mongo/models/city';
const head = { "jsonHead":{ "Content-Type": "application/json" }};

export default class CitiesController {
    getCities = (req, res) => {
        res.writeHead(200, head.jsonHead);

        City.find({}, (error, cities) => {
            res.write(JSON.stringify(cities));
            res.end();
        });
    }

    getCity = (req, res) => {
        const cityId = req.params.id;

        res.writeHead(200, head.jsonHead);

        City.findById(cityId, (error, city) => {
            res.write(JSON.stringify(city));
            res.end();
        });
    }

    getRandomCity = (req, res) => {
        res.writeHead(200, head.jsonHead);

        City.find({}, (error, cities) => {
            const citiesCount = cities.length;
            const cityIndex = Math.floor(Math.random() * citiesCount)

            res.write(JSON.stringify(cities[cityIndex]));
            res.end();
        });
    }

    postCity = (req, res) => {
        res.writeHead(200, head.jsonHead);

        City({
            name: req.body.name,
            country: req.body.country,
            capital: req.body.capital,
            location: req.body.location,
        }).save((error, city) => {
            res.write(JSON.stringify(city));
            res.end();
        });
    }

    deleteCity = (req, res) => {
        const cityId = req.params.id;

        res.writeHead(200, head.jsonHead);

        City.remove({ _id: cityId }, (error) => {
            res.end();
        });
    }

    updateCity = (req, res) => {
        const cityId = req.params.id;

        res.writeHead(200, head.jsonHead);

        City.findById(cityId, (error, city) => {
            city.name = req.body.name;
            city.country = req.body.country;
            city.capital = req.body.capital;
            city.location = req.body.location;

            city.save((error, city) => {
                res.write(JSON.stringify(city));
                res.end();
            })
        });
    }
}
