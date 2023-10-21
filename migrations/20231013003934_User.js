/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("users").then((exist) => {
        if(!exist) {
            return knex.schema.createTable("users",function (table) {
                table.increments("idUser").primary();
                table.string("nameUser").notNullable();
                table.string("lastNameUser").notNullable();
                table.string("emailUser").notNullable().unique();
                table.string("passwordUser").notNullable();
                table.string("phoneUser").notNullable();
                table.string("cityUser").notNullable();
                table.string("contractStatus").notNullable().defaultTo("Available");
                table.integer("rateUser").notNullable().defaultTo(0);
                table.string("aboutUser").notNullable();
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
    return knex.schema.dropTable("users");
};
