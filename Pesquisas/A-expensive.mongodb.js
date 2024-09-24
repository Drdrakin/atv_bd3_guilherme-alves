const database = 'bd3_atv2';

const collection = 'bd3-atv2-produtos';

use(database);

db[collection].findOne(
    {
        $gt
    }
)