"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const MarathonStudent = use("App/Models/MarathonStudent");
const CourseStudent = use("App/Models/CourseStudent");
const Course = use("App/Models/Course");

/**
 * Resourceful controller for interacting with marathonstudents
 */
class MarathonStudentController {
  /**
   * Show a list of all marathonstudents.
   * GET marathonstudents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new marathonstudent.
   * GET marathonstudents/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new marathonstudent.
   * POST marathonstudents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { marathon_id, student_id } = request.all();

    console.log(marathon_id);

    // Achar o primeiro curso da Maratona
    let course = await Course.query()
      .where("marathon_id", marathon_id)
      .fetch();

    console.log(course);

    return response.status(200).send(course);
  }

  /**
   * Display a single marathonstudent.
   * GET marathonstudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing marathonstudent.
   * GET marathonstudents/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update marathonstudent details.
   * PUT or PATCH marathonstudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a marathonstudent with id.
   * DELETE marathonstudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = MarathonStudentController;
