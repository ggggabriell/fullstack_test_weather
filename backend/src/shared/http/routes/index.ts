import { Router } from 'express';
import weatherRouter from '@modules/weather/routes/weather-routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Olá' });
});

routes.use('/weather', weatherRouter);

export default routes;
