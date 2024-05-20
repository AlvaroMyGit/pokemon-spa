function showView() {
  var body = $('#mainDiv');
  body.empty();

  var URL = `/resources/200w.gif`;

  var card = `<div class="card" id="notFound" style="width: 18rem;"><div class="imageDiv"><img src="${URL}" class="card-img-top" alt="Doesn´t exist"></div>
        <div class="card-body">
            <center> <h5 class="card-title"></h5> </center><p></p>
            <p class="card-text">Error 404: Pokemon not found</p>
        </div>
        <div class="card-body">
        </div></div>`;
  body.append(card);
}

export default { showView };
