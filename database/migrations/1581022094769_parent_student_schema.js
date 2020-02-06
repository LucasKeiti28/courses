"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ParentStudentSchema extends Schema {
  up() {
    this.create("parent_student", table => {
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
    });
  }

  down() {
    this.drop("parent_student");
  }
}

module.exports = ParentStudentSchema;
