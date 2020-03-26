const connection = require('../database/connection');
const crytpo = require('crypto');

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crytpo.randomBytes(4).toString('HEX');
        await connection('ong').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    return response.json({ id });
    },

    async index (request, response) {
        const ongs = await connection('ong').select('*');
        return response.json(ongs);
    }
}