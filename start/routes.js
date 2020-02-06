"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Cadastro de Maratona
Route.post("marathons", "MarathonController.store");

// Cadastro de Cursos
Route.post("marathons/:id/courses", "CourseController.store");

// Cadastro de Aulas
Route.post("courses/:id/classes", "ClassController.store");

// Cadastro de Provas
Route.post("courses/:id/exams", "ExamController.store");

// Cadastro das Licoes das Aulas, pode ter mais de uma licao por Aula
Route.post("classes/:id/lessons", "LessonController.store");

// Cadastro do Pai
Route.post("parents", "ParentController.store");

// Cadastro do Student, com o preenchimento da Pivot Table Parent_Student
Route.post("parents/:id/students", "StudentController.store");

// Pai cadastro o filho em uma maratona, e preenche a tabela de courses_students junto.
Route.post("parents/:id/marathons-students", "MarathonStudentController.store");
