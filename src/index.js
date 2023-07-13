import 'dotenv/config';
import express from 'express';
import { personRoutes, familyRoutes } from './routes/index.js';
import morgan from 'morgan';

morgan('tiny');

const app = express();
app.use(express.json());


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is up and listening on ${port}`);
});

app.use('/api/v1', familyRoutes);
app.use('/api/v1', personRoutes);


// when invalid routes are entered
app.use(async (req, res) => {
  res.status(404).send(`Route is no where to be found.`);
});

// app.get('/api/v1/person', async (req, res) => {
//   try {
//     const result = await db.getAllPerson();
//     res.json({
//       status: 'success',
//       totalDocs: result.length,
//       data: result
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });

// app.get('/api/v1/person/:id', async (req, res) => {
//   try {
//     const id = req.params.id
//     const result = await db.getPersonById(id);
//     res.json({
//       status: 'success',
//       data: result,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });

// app.post('/api/v1/person', async (req, res) => {
//   try {
//     const body = req.body;
//     console.log(body);
//     const result = await db.insertPerson(body);
//     res.json({
//       status: 'success',
//       data: result,
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });