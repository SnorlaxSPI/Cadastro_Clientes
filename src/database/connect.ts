import { createConnection } from 'typeorm';

// createconnection busca na raiz do projeto o ormconfig.json
createConnection().then(() => console.log('📦📦 Successfully connected database')).catch(error => console.log(error));
