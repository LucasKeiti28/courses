"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CourseStudentSchema extends Schema {
  up() {
    this.create("course_students", table => {
      table.increments();
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
      table
        .integer("course_id")
        .unsigned()
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE");
      table.enu("status", ["not_available", "pending", "finished"]);
      table.timestamps();
    });
  }

  down() {
    this.drop("course_students");
  }
}

module.exports = CourseStudentSchema;
