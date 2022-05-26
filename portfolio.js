var projects = document.getElementById('projects');

projects.addEventListener('click', function() {
  $(projects).toggleClass("active");
  $(".parent:not(#projects)").toggleClass("invisible");
}, false);
