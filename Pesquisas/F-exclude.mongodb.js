const database = 'bd3_atv2';

const collection = 'bd3-atv2-produtos';

use(database);

db[collection].find(
    {
        $nor : [
            {"categoria": "Maquiagem"},
            {"categoria": "Perfume"}
        ]
    }
)

//Exluir os produtos de duas categorias e mostrar os de outras categorias
//Testado
