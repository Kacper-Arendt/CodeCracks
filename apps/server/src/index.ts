import { createServer } from 'src/server';
import * as console from 'console';

const port = process.env.PORT || 5001;
const server = createServer();

server.listen(port, () => {
	console.log(`api running on ${port}`);
});
