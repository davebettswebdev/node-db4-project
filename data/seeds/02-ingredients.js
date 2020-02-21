
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, name: 'Jello Packet', qty: '1', recipe_id: 1},
        {id: 2, name: 'Water', qty: '1', recipe_id: 1},
        {id: 3, name: 'Cracker', qty: '3', recipe_id: 2},
        {id: 4, name: 'Slice of cheese', qty: '3', recipe_id: 2},
        {id: 5, name: 'Glass', qty: '1', recipe_id: 3},
        {id: 6, name: 'Water', qty: '1', recipe_id: 3},
      ]);
    });
};