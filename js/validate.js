//validate zip code
export function isValidZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

//display allert message
export function showAlert(message, className) {
  //create div
  const div = document.createElement('div');
  //add classes
  div.className = `alert alert-${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //get container
  const container = document.querySelector('.container');
  //get form
  const form = document.querySelector('#pet-form');
  //insert alert: insertBefore(whatToInsert, beforeWhatToInsertIt)
  container.insertBefore(div, form);

  setTimeout(() => document.querySelector('.alert').remove(), 3000);
}
