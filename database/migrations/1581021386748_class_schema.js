"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClassSchema extends Schema {
  up() {
    this.create("classes", table => {
      table.increments();
      table.string("title").notNullable();
      table
        .integer("course_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("courses")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("classes");
  }
}

module.exports = ClassSchema;
