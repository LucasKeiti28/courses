"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ParentSchema extends Schema {
  up() {
    this.create("parents", table => {
      table.increments();
      table.string("name").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("parents");
  }
}

module.exports = ParentSchema;
