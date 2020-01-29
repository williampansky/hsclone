import server from '~/server';

export default async () => {
  return new Promise((response, reject) => {
    const socket = server();

    socket.emit('game', null, result => {
      const { code } = result;
      if (code === 200) response(result);
      else response(null);
    });
  });
};
