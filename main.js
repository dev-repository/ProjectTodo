import './style.css'
import { listCount } from './src/listCount.js'
import { listAdd } from './src/listAdd.js';
import { getTodo } from './src/getTodo.js';
import { showList } from './src/showList.js';


listCount(document.querySelector('.list'));
listAdd(document.querySelector('#addBtn'));
getTodo();
showList();