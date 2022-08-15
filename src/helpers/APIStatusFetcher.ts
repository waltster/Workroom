export default async function fetchStatus(source){
    try{
      var req;

      if(source.statusEndpoint.headers){
        req = await fetch(source.statusEndpoint.url, {
          method: 'GET',
          headers: source.statusEndpoint.headers
        });
      }else{
        req = await fetch(source.statusEndpoint.url, {
          method: 'GET',
        });
      }

      if(req.ok){
        return {
          level: 'okay',
          description: 'Reporting online'
        };
      }else{
        return {
          level: 'error',
          description: 'Response was not okay'
        };
      }
    }catch(e){
      console.log(e);

      return {
        level: 'error',
        description: 'Error fetching status.'
      }
    }
}
