"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MarathonSchema extends Schema {
  up() {
    this.create("marathons", table => {
      table.increments();
      table.string("title").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("marathons");
  }
}

module.exports = MarathonSchema;
