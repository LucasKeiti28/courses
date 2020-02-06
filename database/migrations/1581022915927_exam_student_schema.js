"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ExamStudentSchema extends Schema {
  up() {
    this.create("exam_students", table => {
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
        .integer("exam_id")
        .unsigned()
        .references("id")
        .inTable("exams")
        .onUpdate("CASCADE");
      table.enu("status", ["not_available", "pending", "finished"]);
      table.timestamps();
    });
  }

  down() {
    this.drop("exam_students");
  }
}

module.exports = ExamStudentSchema;
