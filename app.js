import express from 'express';
import hbs from 'hbs'
import 'dotenv/config';
import * as url from 'url';
//const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express();
const port = process.env.PORT;
/**
 * Para la ruta principal o la ruta base se puede enviar por defecto un archivo html
 * Este archivo se ubuca en la carpeta public, ta cual es accesible para cualquiera que conozca la ruta base
 */

app.use(express.static('public'));
hbs.registerPartials(__dirname+'/views/partials'); // permite cargar partials de hbs

// para usar renderixado con HBS
// Para esto se requiere colocar los archivos con extension hbs en una carpeta
// llamada views
app.set('view engine', 'hbs')

// definimos las rutas y las funciones



app.get('/', (req, res)=>{
    /*
    Renderiza el archivo home.hbs desde la carpeta view
    */
    res.render('home',{
        titulo: 'Curso Node',
        nombre: 'Alberto Lizcano'
    });
});

app.get('/generic', (req, res)=>{
    res.render('generic',{
        titulo: 'Curso Node Generic',
        nombre: 'Alberto Lizcano'
    });
});

app.get('/elements', (req, res)=>{
    res.render('elements',{
        titulo: 'Curso Node Elements',
        nombre: 'Alberto Lizcano'
    });
});

app.get('/*', function(req,res){
    res.send('Error')
});

app.listen(port, ()=>{
    console.log(`App corriendo en el puerto ${port}`)
});
