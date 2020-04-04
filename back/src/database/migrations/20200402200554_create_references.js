
exports.up = function(knex) {
  return knex.schema.createTable('references', table =>{
      table.increments();
      table.string('problem').notNullable();
      table.timestamps();//É para listar data de criação e mudanças na tabela 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('references');
};
