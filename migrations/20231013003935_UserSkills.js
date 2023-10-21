/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("usersskills").then((exist) => {
        if (!exist) {
            return knex.schema.createTable("usersskills", function (table) {
                table.increments("idUserSkill").primary();
                table.integer('idUser').unsigned();
                table.integer('idSkill').unsigned();
                table.foreign('idUser').references('users.idUser');
                table.foreign('idSkill').references('skills.idSkill');
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
    return knex.schema.dropTable("usersskills");
};
