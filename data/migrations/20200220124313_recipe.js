
exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name',255).notNullable().index();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name',255).notNullable().index();
            tbl.float('qty').notNullable()
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
        .createTable('steps', tbl => {
            tbl.increments();
            tbl.integer('step_number')
                .unsigned()
                .notNullable();
            tbl.text('instructions')
                .notNullable();
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('steps')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};