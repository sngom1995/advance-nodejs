const fs = require('fs').promises;

const getStats = async (path) => {
    try {
        const stats = await fs.stat(path);
        console.table(stats);
    } catch (error) {
        console.error(error);
    }
    }

const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, 'utf8');
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
    }

    const writeFile = async (path, data) => {
        try {
            await fs.writeFile(path, data, 'utf8');
        }
        catch (error) {
            console.error(error);
        }
        }

const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data, 'utf8');

    }
    catch (error) {
        console.error(error);
    }
    }
getStats('./test.txt');
appendFile('./test.txt', ' Hello World');
readFile('./test.txt');