"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AllowanceSchema extends Schema {
  up() {
    this.create("allowances", table => {
      table.increments();
      table
        .integer("parent_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("parents")
        .onUpdate("CASCADE");
      table
        .integer("student_id")
        .unsigned()
        .references("id")
        .inTable("students")
        .onUpdate("CASCADE");
      table.decimal("value", 12, 2).notNullable();
      table.boolean("approved").defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop("allowances");
  }
}

module.exports = AllowanceSchema;
