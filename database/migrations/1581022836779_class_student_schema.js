"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClassStudentSchema extends Schema {
  up() {
    this.create("class_students", table => {
      table.increments();
      table
        .integer("student_id")
        .unsigned()
        .references("id")
        .inTable("students")
        .onUpdate("CASCADE");
      table
        .integer("course_id")
        .unsigned()
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE");
      table
        .integer("class_id")
        .unsigned()
        .references("id")
        .inTable("classes")
        .onUpdate("CASCADE");
      table.enu("status", ["not_available", "pending", "finished"]);
      table.timestamps();
    });
  }

  down() {
    this.drop("class_students");
  }
}

module.exports = ClassStudentSchema;
