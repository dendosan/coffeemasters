import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';

window.app = {}
app.store = Store;

// It's better to wait for event before manipulating DOM
window.addEventListener("DOMContentLoaded", async () => {
  loadData();
});
