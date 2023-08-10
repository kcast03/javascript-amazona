import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { parseRequestUrl } from './util.js';
import Error404Screen from './screens/Error404Screen.js';
const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
};
const router = () =>{
    const request = parseRequestUrl();
    //if request resource exits return it
    const parseUrl = (request.resource ? `/${request.resource}` : '/') + 
        (request.id ? '/:id:' : '')+
        (request.action ? `/${request.action}` : '');
        //? means if exsits, : means otherwise
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

    const main = document.getElementById("main-container");
    main.innerHTML = screen.render();
};
window.addEventListener("load", router);
window.addEventListener('hashchange', router);