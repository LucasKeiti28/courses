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

// Pai cadastro o filho em uma maratona, e preenche a tabela de courses_students, classes_students junto.
Route.post("parents/:id/marathons-students", "MarathonStudentController.store");

// Filho clica no botao do modal quando ele terminou a aula, mudando o status da aula, e liberando a prova para o aluno.
Route.post("students/:id/exams-students", "ExamStudentController.initialExam");

// Filho clica no botao do modal quando ele terminou a prova, mudando o status da prova, e liberando o curso seguinte para o aluno.
Route.post(
  "students/:id/courses-students",
  "CourseStudentController.initialNextCourse"
);
