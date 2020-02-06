"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Student extends Model {
  parents() {
    return this.belongsToMany("App/Models/Parent");
  }
}

module.exports = Student;
