
exports.seed = function(knex) {
  return knex('steps').del()
    .then(function () {
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: 'Open Jello Packet', recipe_id: 1},
        {id: 2, step_number: 2, instructions: 'Pour mix in container', recipe_id: 1},
        {id: 3, step_number: 3, instructions: 'Add water', recipe_id: 1},
        {id: 4, step_number: 4, instructions: 'Put in fridge', recipe_id: 1},
        {id: 5, step_number: 1, instructions: 'Put cheese on cracker', recipe_id: 2},
        {id: 6, step_number: 1, instructions: 'Put water in glass', recipe_id: 3},
      ]);
    });
};