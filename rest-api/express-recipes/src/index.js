import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { initialize } from './middleware/auth.js';
import recipesRouter from './routers/recipes.js';
import { handleError } from './utils/error.js';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, './public');
console.log(publicPath);

app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(handleError)
app.use(initialize())

app.use('/api/v1/recipes', recipesRouter);

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const hostname = process.env.HOSTNAME || 'localhost';



app.get('/', (req, res) => {
    res.render('index', { title: 'Express Recipes' });
    }
);

app.get('/:name', (req, res) => {
    res.send(`Welcome to express server ${req.params.name}!`);
    }
);

app.listen(3000, () => {
    console.log(`Server running at http://${hostname}:${port}/ in ${env} mode`);
    }
);