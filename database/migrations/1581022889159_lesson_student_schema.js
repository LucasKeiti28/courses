"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LessonStudentSchema extends Schema {
  up() {
    this.create("lesson_students", table => {
      table.increments();
      table
        .integer("student_id")
        .unsigned()
        .references("id")
        .inTable("students")
        .onUpdate("CASCADE");
      table
        .integer("class_id")
        .unsigned()
        .references("id")
        .inTable("classes")
        .onUpdate("CASCADE");
      table
        .integer("lesson_id")
        .unsigned()
        .references("id")
        .inTable("lessons")
        .onUpdate("CASCADE");
      table.enu("status", ["not_available", "pending", "finished"]);
      table.timestamps();
    });
  }

  down() {
    this.drop("lesson_students");
  }
}

module.exports = LessonStudentSchema;
