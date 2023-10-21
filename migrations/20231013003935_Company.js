/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("company").then((exist) => {
        if (!exist) {
            return knex.schema.createTable("company", function (table) {
                table.increments("idCompany").primary();
                table.string("companyName").notNullable();
                table.string("addressCompany").notNullable();
                table.string("emailCompany").notNullable().unique();
                table.string("phoneCompany").notNullable();
                table.string("passwordCompany").notNullable();
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
exports.down = function (knex) {
    return knex.schema.dropTable("company");
};
