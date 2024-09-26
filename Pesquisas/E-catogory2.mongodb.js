const database = 'bd3_atv2';

const collection = 'bd3-atv2-produtos';

use(database);

db[collection].find(
    {
        $or : [
            { "categoria": "Maquiagem" },
            { "categoria": "Perfume" }
        ]
    }
)

//Pesquisa por duas categorias, ou seja, uma categoria ou outra