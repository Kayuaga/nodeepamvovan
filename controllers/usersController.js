import User from '../dao/mongo/models/user';

const head = { "jsonHead":{ "Content-Type": "application/json" }};
export default class UsersController {
    getUsers = (req, res) => {
        res.writeHead(200, head.jsonHead);

        User.find({}, (error, users) => {
            res.write(JSON.stringify(users));
            res.end();
        });
    }

    deleteUser = (req, res) => {
        const userId = req.params.id;

        res.writeHead(200, head.jsonHead);

        User.remove({ _id: userId }, (error) => {
            res.end();
        });
    }
}
