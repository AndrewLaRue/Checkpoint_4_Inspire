import { ProxyState } from "../AppState.js";
import { Name } from "../Models/Name.js";





export function saveState(){
  console.log('saving');
  let data = {
    name : ProxyState.name,
  }
  localStorage.setItem('Name', JSON.stringify(data))

}

export function loadState(){
  console.log('loading');
  
  let rawData = localStorage.getItem('Name')
  if(rawData){
    let data = JSON.parse(rawData)
    // ProxyState.name = data.name = new Name()
    ProxyState.name = new Name(data.name)
  }
  


}