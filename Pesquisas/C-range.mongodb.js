const database = 'bd3_atv2';

const collection = 'bd3-atv2-produtos';

use(database);

db[collection].find(
   {  valor: {
       $gt: 30, $lt: 50
     }}
)

//Testado 