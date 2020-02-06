"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CourseSchema extends Schema {
  up() {
    this.create("courses", table => {
      table.increments();
      table.string("title").notNullable();
      table
        .integer("marathon_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("marathons")
        .onUpdate("CASCADE");
      table.integer("course_id_dependence");
      table.timestamps();
    });
  }

  down() {
    this.drop("courses");
  }
}

module.exports = CourseSchema;
