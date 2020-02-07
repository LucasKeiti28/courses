"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ExamStudent = use("App/Models/ExamStudent");
const ClassStudent = use("App/Models/ClassStudent");

/**
 * Resourceful controller for interacting with examstudents
 */
class ExamStudentController {
  /**
   * Show a list of all examstudents.
   * GET examstudents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new examstudent.
   * GET examstudents/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new examstudent.
   * POST examstudents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single examstudent.
   * GET examstudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing examstudent.
   * GET examstudents/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update examstudent details.
   * PUT or PATCH examstudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a examstudent with id.
   * DELETE examstudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params: { id }, request, response }) {}

  async initialExam({ params: { id }, request, response }) {
    try {
      const class_id = request.input("class_id");
      const exam_id = request.input("exam_id");
      const course_id = request.input("course_id");

      let class_student = await ClassStudent.query()
        .where("class_id", class_id)
        .andWhere("student_id", id)
        .andWhere("course_id", course_id)
        .update({
          status: "finished"
        });

      if (class_student) {
        const addExam = await ExamStudent.create({
          student_id: id,
          exam_id: exam_id,
          course_id: course_id,
          status: "pending"
        });
        return response.status(200).send(addExam);
      } else {
        return response.status(400).send({ message: "Erro na acao" });
      }
    } catch (error) {
      return response.send(error);
    }
  }
}

module.exports = ExamStudentController;
