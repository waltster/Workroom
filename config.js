export const config = {
  sources: [
    {
      uid: '0',
      name: 'Workroom UI',
      type: 'Test',
      description: 'The user interface for this application',
      statusEndpoint: {
        url: 'http://127.0.0.1:5173/'
      }
    },
    {
      uid: '1',
      name: 'Greynoise API',
      type: 'REST API',
      description: 'Greynoise provides context and description of IP-related threats',
      statusEndpoint: {
        url: 'https://api.greynoise.io/ping',
        headers: {
          'key': ''
        }
      }
    }
  ]
}
