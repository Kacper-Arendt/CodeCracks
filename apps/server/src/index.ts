import { createServer } from 'src/server';
import * as console from 'console';
import { port } from 'src/config';

const serverPort = port || 5001;
const server = createServer();

server.listen(serverPort, () => {
	console.log(`api running on ${serverPort}`);
});
