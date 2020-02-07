"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const CourseStudent = use("App/Models/CourseStudent");
const ClassStudent = use("App/Models/ClassStudent");
const ExamStudent = use("App/Models/ExamStudent");
const Course = use("App/Models/Course");
const Class = use("App/Models/Class");

/**
 * Resourceful controller for interacting with coursestudents
 */
class CourseStudentController {
  /**
   * Show a list of all coursestudents.
   * GET coursestudents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new coursestudent.
   * GET coursestudents/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new coursestudent.
   * POST coursestudents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single coursestudent.
   * GET coursestudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing coursestudent.
   * GET coursestudents/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update coursestudent details.
   * PUT or PATCH coursestudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a coursestudent with id.
   * DELETE coursestudents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  async initialNextCourse({ params: { id }, request, response }) {
    const marathon_id = request.input("marathon_id");
    const exam_id = request.input("exam_id");
    const course_id = request.input("course_id");

    let nextCourse = await Course.findByOrFail(
      "course_id_dependence",
      course_id
    );

    nextCourse = nextCourse.toJSON();

    let nextClass = await Class.findByOrFail("course_id", nextCourse.id);

    nextClass = nextClass.toJSON();

    let exam_student = await ExamStudent.query()
      .where("exam_id", exam_id)
      .andWhere("student_id", id)
      .andWhere("course_id", course_id)
      .update({
        status: "finished"
      });

    if (exam_student) {
      let course_student = await CourseStudent.query()
        .where("course_id", course_id)
        .andWhere("marathon_id", marathon_id)
        .andWhere("student_id", id)
        .update({
          status: "finished"
        });

      if (course_student) {
        const addNextCourse = await CourseStudent.create({
          student_id: id,
          marathon_id,
          course_id: nextCourse.id,
          status: "pending"
        });

        if (addNextCourse) {
          const addNextClass = await ClassStudent.create({
            student_id: id,
            course_id: nextCourse.id,
            class_id: nextClass.id,
            status: "pending"
          });

          return response.status(200).send(addNextClass);
        }
      }
    }
  }
}

module.exports = CourseStudentController;
