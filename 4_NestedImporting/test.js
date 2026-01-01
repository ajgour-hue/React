
import {box} from "./app.js  ";
import {circle} from "./app.js";

const parent = function(){
 return React.createElement('div', {id: 'parent'}, [box(), circle()]);
}

export default parent;

