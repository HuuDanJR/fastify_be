const fs = require('fs');
const path = require('path');
const fastify = require('fastify')({ 
  logger: {
    level: 'info', // Set the log level
    transport: {
      targets: [
        {
          target: 'pino-pretty', // Pretty logs for console
          options: {
            colorize: true, // Enable colorized output for the console
          },
          level: 'info' // Log level for the console
        },
        {
          target: 'pino/file', // Output logs to a file
          options: { destination: './logs/server.log' },
          level: 'info' // Log level for the file
        }
      ]
    }
  }
});
// Ensure the logs directory exists
const logsDir = path.join(__dirname, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true }); // Create the logs directory if it doesn't exist
}


// Enable CORS
fastify.register(require('@fastify/cors'), { 
  origin: '*' 
});



// Serve static files
fastify.register(require('@fastify/static'), {
  root: path.join(__dirname, 'public-flutter'),
  prefix: '/', // Optional: set a URL prefix
});

// Route for serving the index.html
fastify.get('/', async (request, reply) => {
  return reply.sendFile('index.html'); // Serving index.html from 'public-flutter'
});


fastify.get('/view', async (req,rep)=>{
  return {message:"hello word"}
})


fastify.addHook('onRequest', (request, reply, done) => {
  request.log.info(`Incoming request: ${request.method} ${request.url}`);
  done();
});

fastify.addHook('onResponse', (request, reply, done) => {
  request.log.info(`Response sent with status code: ${reply.statusCode}`);
  done();
});








// Start the server
const start = async () => {
  try {
    const port = process.env.PORT || 8087;
    await fastify.listen({ port });
    fastify.log.info(`fastify be running at port: ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};


// Graceful shutdown implementation
const gracefulShutdown = async () => {
  try {
    fastify.log.info('Shutting down gracefully...');
    await fastify.close();
    fastify.log.info('All connections closed, shutting down');
    process.exit(0);
  } catch (err) {
    fastify.log.error('Error during shutdown', err);
    process.exit(1);
  }
};



// Listen for termination signals (e.g., SIGINT or SIGTERM)
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

start();


