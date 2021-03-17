import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import authorsRouter from './routes/authors.js';
import postsRouter from  './routes/posts.js';

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;
const www = process.env.WWW || './';

// app.use(express.static(www));
// console.log(`serving ${www}`);

// middleware
app.use(cors());
app.use(express.json());

app.use('/api/author', authorsRouter);
app.use('/api/posts', postsRouter);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
          .then(() => app.listen(port, () => console.log(`listening on http://localhost:${port}`)))
          .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

// app.use(auth)

// app.get('/api/author', (req, res) => {
//      const developer = [
//           {id: 1, name: "Xu, Mengdi"},
//           {id: 2, name: "He, Xiaoxin"},
//           {id: 3, name: "Yan, Long"},
//           {id: 4, name: "Tao, Yi"},
//      ];

//      res.json(developer);

//      // res.sendFile(`index.html`, { root: www });
// });

// app.listen(port, () => console.log(`listening on http://localhost:${port}`));


