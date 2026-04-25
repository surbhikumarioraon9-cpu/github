function scrollToProjects() {
  document.getElementById("projects").scrollIntoView();
}

document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message Sent!");
});