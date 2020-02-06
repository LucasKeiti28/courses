"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class LessonsAddColumnsSchema extends Schema {
  up() {
    this.alter("lessons", table => {
      table.string("title").notNullable();
    });
  }

  down() {
    this.alter("lessons", table => {
      table.string("title").notNullable();
    });
  }
}

module.exports = LessonsAddColumnsSchema;
