/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
return knex.schema.hasTable("skills").then((exist) => {
    if(!exist) {
        return knex.schema.createTable("skills",function (table) {
            table.increments("idSkill").primary();
            table.string("nameSkill").notNullable().unique();
            table.boolean("active").notNullable().defaultTo(true);
            table.timestamp("created_at").defaultTo(knex.fn.now());
        });
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("skills");
};
