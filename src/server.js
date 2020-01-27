// packages
import io from 'socket.io-client';
import serverConfig from 'config/server.config';

const { host } = serverConfig;
const connections = {};

export default () => {
  if (Boolean(connections[host]) === false) {
    connections[host] = io(host);
  }

  return connections[host];
};
