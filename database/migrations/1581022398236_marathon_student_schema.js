"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MarathonStudentSchema extends Schema {
  up() {
    this.create("marathon_students", table => {
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
      table
        .integer("marathon_id")
        .unsigned()
        .references("id")
        .inTable("marathons")
        .onUpdate("CASCADE");
      table.enu("status", ["not_available", "pending", "finished"]);
      table.timestamps();
    });
  }

  down() {
    this.drop("marathon_students");
  }
}

module.exports = MarathonStudentSchema;
