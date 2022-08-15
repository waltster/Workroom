import {config} from '../../config.js';

export async function fetchSources(){
  try{
    var req = await fetch(`${config.pace_server}/sources/status`, {method: 'GET'});

    if(!req.ok){
      console.log(`${req.status} ${req.statusText}`);
      return [];
      return;
    }

    var sources = await req.json();

    return sources;
  }catch(e){
    console.log(e);
    return []
  }
}

export function paceEndpoint(source){
  if(typeof source === 'string'){
    return `${config.pace_server}/source/${source}`;
  }else{
    return `${config.pace_server}/source/${source.uuid}`;
  }
}
