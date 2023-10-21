/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("requests").then((exist) => {
        if (!exist) {
            return knex.schema.createTable("requests", function (table) {
                table.increments("idRequest").primary();
                table.integer('idUser').unsigned();
                table.integer('idCompany').unsigned();
                table.string("requestSubject").notNullable();
                table.string("descriptionRequest").notNullable();
                table.string("paymentStatus").notNullable();
                table.string("statusRequest").notNullable();
                table.integer("feeRequest").notNullable();
                table.foreign('idUser').references('users.idUser');
                table.foreign('idCompany').references('company.idCompany');
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
    return knex.schema.dropTable("requests");
};
