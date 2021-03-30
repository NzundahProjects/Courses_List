

var courses = document.getElementsByClassName("course");

for (var i = 0; i < courses.length; i++) {
    courses[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
          content.style.maxHeight = null;
    } else {
          content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

