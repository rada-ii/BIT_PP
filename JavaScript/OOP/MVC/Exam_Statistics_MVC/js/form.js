// Collect data from the form
function collectFormData() {
  let subject = $('#subject').val();
  let name = $('#name-lastName').val();
  let grade = $('#grade').val();
  return { subject, name, grade };
}

// Validate the collected data
function validateFormData(data) {
  let errors = [];
  let nameRegex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

  if (!data.subject) {
    errors.push('Please select a subject.');
  }

  if (!nameRegex.test(data.name)) {
    errors.push(
      'Please enter a valid name and surname, with each word starting with a capital letter.'
    );
  }

  if (!data.grade || isNaN(data.grade) || data.grade < 1 || data.grade > 10) {
    errors.push('Please enter a valid grade between 1 and 10.');
  }
  if (grade > 5) {
    color = 'green';
    float = 'right';
  } else {
    color = 'red';
    float = 'right';
  }

  if (!errors.length) {
    $('#subject').val('');
    $('#name-lastName').val('');
    $('#grade').val('');
  }

  return errors;
}

function updateList(list, item) {
  return $(`#${list}-list`).append(`<li>${item}</li>`);
}
//

// Update the statistics in the page header
function updateStatistics(passed, failed) {
  $('#total-students-span').text(passed + failed);
  $('#students-passed-span').text(passed);
  $('#students-failed-span').text(failed);
  let failPercent = (failed / (passed + failed)) * 100;
  $('#students-failed-span').append(` (${failPercent.toFixed(2)}%)`);
}
