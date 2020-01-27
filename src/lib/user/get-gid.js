// packages
import server from '~/server';

export default async () => {
  return new Promise((response, reject) => {
    const socket = server();

    // ask server for the gid of the current user
    socket.emit('get-gid', null, result => {
      const { code, gid } = result;
      if (code === 200) {
        response(gid);
      } else {
        response(null);
      }
    });
  });
};
