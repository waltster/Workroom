export default function decodeStatus(status){
  var color = 'blue';
  var message = '';
  var level = 'Unknown';

  switch(status.level.toLowerCase()){
    case 'error':
      color = 'red';
      message = `Source reporting error: ${status.message}`;
      level = 'Error';
      break;
    case 'warning':
      color = 'yellow';
      level = 'Warning';
      message = `Source reporting warning: ${status.message}`;
      break;
    case 'info':
      color = 'blue';
      level = 'Info';
      message = status.message;
      break;
    case 'okay':
    case 'ok':
      color = 'green';
      level = 'Okay';
      message = status.message;
      break;
    default:
      color = 'indigo';
      level = 'Offline'
      message = `Source offline/invalid`;
      break;
  }

  return {
    level: level,
    color: color,
    message: message
  };
}
