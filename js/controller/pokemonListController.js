import { showList } from '/js/view/pokemonListView.js';
import { fetchList } from '/js/service/pokemonListService.js';

function init() {
  fetchList(showList);
}

export default { init };
