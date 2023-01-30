// app.js

let passedExams = [];
let failedExams = [];
let totalPassed = 0;
let totalFailed = 0;

$(function () {
  // Handle the form submission
  $('#add-btn').click(function (e) {
    e.preventDefault();

    let formData = collectFormData();
    let errors = validateFormData(formData);

    if (errors.length) {
      // Show the errors
      alert(errors.join('\n'));
      return;
    }

    let subject = new Subject(formData.subject);
    let student = new Student(formData.name);
    let exam = new Exam(subject, student, formData.grade);

    if (exam.hasPassed()) {
      passedExams.push(exam);
      totalPassed++;
      updateList('passed', exam.getExamInfo());
    } else {
      failedExams.push(exam);
      totalFailed++;
      updateList('failed', exam.getExamInfo());
    }

    updateStatistics(totalPassed, totalFailed);
  });
});
