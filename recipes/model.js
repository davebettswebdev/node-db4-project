const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
};

function find() {
  return db('recipes');
}

function findById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function findSteps(id) {
  return db('steps as st')
    .join('recipes as r', 'r.id', 'st.recipe_id')
    .select('r.name', 'st.id as step_id', 'st.step_number', 'st.instructions')
    .where('st.recipe_id', id)
    .orderBy('st.step_number');
}

function add(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(ids => {
      return findById(ids[0]);
    });
}

function addStep(stepData, id) {
    const newStep = {...stepData, recipe_id: id}
    return db('steps')
      .insert(newStep)
      .then(() => {
          return findSteps(id)});
  }

function update(changes, id) {
  return db('recipes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('recipes')
    .where('id', id)
    .del();
}