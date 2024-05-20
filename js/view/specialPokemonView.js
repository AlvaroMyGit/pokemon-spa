function showSpecialList() {
    var body = $('#mainDiv');
    body.empty();
    var table = `<table id="pokeSpecialTable"></table>`;
    body.append(table);
    var finalTable = $('#pokeSpecialTable');
    var row = `
          <tr>
          <td>Alex</td>
          <td><img src='resources/alex.png'></td>
          </tr>
          <tr>
          <td>Castelo</td>
          <td><img src='resources/castelo.png'></td>
          </tr>
          <tr>
          <td>Carol</td>
          <td><img src='resources/carol.png'></td>
          </tr>
          <tr>
          <td>Gustavo</td>
          <td><img src='resources/gustavo.png'></td>
          </tr>
          <tr>
          <td>Mário</td>
          <td><img src='resources/mario.png'></td>
          </tr>
          <tr>
          <td>Rui</td>
          <td><img src='resources/rui.png'></td>
          </tr>
          `;
    finalTable.append(row);
  }

  $('#specialList').on('click', function cleanPage() {
      document.getElementById('userInput').value = '';
    });
    
  export { showSpecialList };