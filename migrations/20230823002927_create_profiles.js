/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('profiles', table => {
      table.increments('id').primary();
      table.string('bio', 50).notNullable();
      table.string('description', 50);    
      table.integer('user_id').unique().unsigned();
      table.foreign('user_id').references("users.id").onDelete("cascade").onUpdate("cascade")
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  