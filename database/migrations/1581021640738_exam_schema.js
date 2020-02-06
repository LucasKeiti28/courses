"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ExamSchema extends Schema {
  up() {
    this.create("exams", table => {
      table.increments();
      table.string("title").notNullable();
      table
        .integer("course_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE");
      table
        .integer("class_id")
        .unsigned()
        .references("id")
        .inTable("classes")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("exams");
  }
}

module.exports = ExamSchema;
