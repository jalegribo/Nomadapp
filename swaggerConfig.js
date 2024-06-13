import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Nomadapp',
            version: '1.0.0',
            description: 'API para manejo de autenticación, cursos y usuarios'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor de desarrollo'
            }
        ],
    },
    apis: ['./routes/*.js'], // Ruta a los archivos donde están tus rutas documentadas con JSDoc
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerDocs, swaggerUi };
