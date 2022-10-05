import {config} from '../../config.js';

export async function fetchSourceStatus(uuid?: string){
  try{
    var req = null;

    if(uuid){
      req = await fetch(`${config.pace_server}/source/${uuid}/status`, {method: 'GET'});
    }else{
      req = await fetch(`${config.pace_server}/sources/status`, {method: 'GET'});
    }

    if(!req.ok){
      console.log(`${req.status} ${req.statusText}`);
      return null;
    }

    var sources = await req.json();

    return sources;
  }catch(e){
    console.log(e);
    return null;
  }
}

export function paceEndpoint(source){
  if(typeof source === 'string'){
    return `${config.pace_server}/source/${source}/status`;
  }else{
    return `${config.pace_server}/source/${source.uid}/status`;
  }
}
