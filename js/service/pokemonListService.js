function fetchList(cb) {
  var URL =
    'https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokedex=all';

  $.ajax({
    url: URL,
    async: true,
    type: 'GET',
    dataType: 'text',
    success: cb,
  });
}

export { fetchList };
