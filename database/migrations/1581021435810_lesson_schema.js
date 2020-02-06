"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LessonSchema extends Schema {
  up() {
    this.create("lessons", table => {
      table.increments();
      table
        .integer("class_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("classes")
        .onUpdate("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("lessons");
  }
}

module.exports = LessonSchema;
