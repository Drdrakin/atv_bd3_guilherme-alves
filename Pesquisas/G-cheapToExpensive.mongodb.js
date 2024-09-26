const database = 'bd3_atv2';

const collection = 'bd3-atv2-produtos';

use(database);

db[collection].find().sort({ "valor": 1 })

//Todos os produtos ordenados de forma crescente pelo valor
//Testado
