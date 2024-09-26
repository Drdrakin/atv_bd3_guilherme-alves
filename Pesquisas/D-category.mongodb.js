const database = 'bd3_atv2';

const collection = 'bd3-atv2-produtos';

use(database);

db[collection].find(
   {
      $and: [
         {  "categoria": "Maquiagem" },
         { "qnt": {$lt: 25} }
      ]
   }
)

//Por uma categoria, sem mostrar todos
//Testado