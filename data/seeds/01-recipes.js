
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {
          id: 1, 
          name: 'Jello'
        },
        {
          id: 2, 
          name: 'Crackers and Cheese'
        },
        {
          id: 3, 
          name: 'Glass of Water'
        }
      ]);
    });
};