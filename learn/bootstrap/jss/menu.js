import { menuItems } from "./menu-data.js";
import { getMenuHTML} from "./menu-template.js";

let html ="";
for (let menuItem of menuItems){
    if (menuItem.active){
        html += getMenuHTML(menuItem);        
    }
}
document.getElementById("menu").innerHTML=html;

