function deployData(data) {
  var showThis = "";
  data.forEach(function(item, index) {
    var type = item.wordtype;
    var def = item.definition;
    showThis += `<div class="row">
      <span class="index">${index + 1}</span>
      <span class="type">(${type})</span>
      <span class="definition">:: ${def}</span>
    </div><hr>`;
  });
  document.getElementById("show").innerHTML = showThis;
}

function fetchData(word) {
  $.ajax({
    url: `http://localhost:8080/?word=${word}`,
    type: 'GET',
    success: function(data) {
      deployData(data);
    },
    error: function() {
      console.log('An error occurred from the server');
    },
  });
}

function handleLookup() {
  var word = $('#word').val();
  fetchData(word);
}

function handleEnterKey(event) {
  if (event.key === 'Enter') {
    handleLookup();
  }
}

$('#lookup').on('click', handleLookup);
$('#word').on('keyup', handleEnterKey);