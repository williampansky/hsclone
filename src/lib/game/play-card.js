import server from '~/server';

export default async (object, slot) => {
  const dispatchObj = {
    slot: slot,
    data: object
  };

  return new Promise((response, reject) => {
    const socket = server();

    socket.emit('play-card', dispatchObj, result => {
      const { code, data, slot } = result;
      if (code === 200) response({ slot, data });
      else response(null);
    });
  });
};
