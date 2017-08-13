import "reflect-metadata";
import * as express from 'express';

const app = express();

app.listen(3001, () => {
    console.log('Express app started at 3001 port!');
});
