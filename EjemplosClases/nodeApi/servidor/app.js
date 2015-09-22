/**
 * ********************* AQUÍ ES DONDE NUESTRA APP REQUIERE LAS LIBRERÍAS (MÓDULOS) Y LAS UTILIZA *********************
 * DEVUELVE ALGÚN TIPO DE ERRROR SI NO ENCUENTRA EL MÓDULO REQUERIDO
 */


/**
 Un Middleware es un handler que se activa ante unas determinadas
 peticiones o todas, antes de realizar la acción principal de una ruta.
 Podemos poner tantos middlewares como nos hagan falta.
 Una aplicación Express es esencialmente una serie de llamadas a middlewares.
 */


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')

// cargo los controladores que genero en index.js y users.js
// y los guardo en variables para trabajar con ellos.
// Usa dos controladores, routes/index y routes/users
// Una vez cargados hace los get en index.js y user.js de routes
var routes = require('./routes/index');
var users = require('./routes/users');

// carga express en app para tener express
var app = express();


/**
 * TODOS ESTOS 'app' SON MIDDLEWARE A NIVEL DE APLICACIÓN
 */
// view engine setup
// a 'app' le dice que las vistas están el 'paht' que sigue
app.set('views', path.join(__dirname, 'views'));
// el motor de vistas va a usar el 'ejs' que trabaja en 'html' las vistas
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
/**
 * Built-in —> añaden funcionalidad estándar
 */

// a 'app' le decimos que use lo siguiente
// usa por defecto el entorno de desarrollo de development
// si queremos cargar plugins de terceros lo haríamos de esta forma y aquí mismo (*1)
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// aquí estamos cargando a express un plugin, como una librería
// para servir estáticos que es 'express.static'.
// Recibe como parámetro una ruta que es donde está la carpeta de estáticos
// Está uniendo lo que devuelva '__dirname' con la palabra 'public'
// '__dirname' coge la ruta donde nos encontramos y le añade '/public'
// y esa va a ser la carpeta de estáticos. Podemos tener varias carpetas de estáticos.
// vemos en la ventana de la derecha, en la carpeta 'public'(que es la que hace 'path.join'
// con la ruta en la que nos encontramos ('__dirname'),que contiene las carpetas
// estáticos --> 'images', 'javascripts' y 'stylesheets', y es la que nos ha creado por defecto
//'express-generator'. Nosotros la podemos renombrar como queramos y añadir otras más como 'public2'
// lo mismo hace con las 'wiews' que vemos más arriba. Esta ruta de estáticos servirá aquellos elementos
// que le sean requeridos por los 'app.use', si los tiene los devolverá. No llama a 'next' si encuentra el fichero
// si no lo encuentra, entonces lo llamaría para pasarselo a la siguiente carpeta de estáticos y así sucesivamente.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public2')));

//(*1)
/**
 * Third-party —> añaden funcionalidad de terceros,
 * EN ESTE CASO NO HAY NINGUNO (*1)
 */


/**
 * AQUÍ CARGAR LOS CONTROLADORES (routes y users),
 * ENGANCHANDO ASÍ MIS RUTAS A EXPRESS.
 * ACLARAR QUE A ROUTES Y A USERS LOS LLAMAMOS CONTROLADORES
 * CONCEPTUALMENTE PERO NO DEJAN DE SER DOS MIDDLEWARES MÁS
 */

/*
 ********** ¡¡IMPORTANTE!! **********
 */

// aquí cargará las rutas que definamos en "/" EN EL NAVEGADOR!!!
// si pusieramos "/clientes" nos cargaría todas las rutas que definamos después de "/clientes"
// VIENE MUY BIEN PARA REUTILIZAR Y NO TENER QUE CAMBIAR UNA POR UNA LAS RUTAS
// POR TANTO CARGA LAS RUTAS QUE HAY EN 'ROUTES' Y EN 'USERS'
app.use('/', routes);
// lo mismo pasa con "users", cargará todos los 'users' después de "/users", ES DECIR DESPUÉS DE LA PÁGINA INDEX DE INCIO ('/)
app.use('/users/', users);


/**
 * SI NADIE RESPONDE SE VA A LLEGAR A ESTOS MIDDLEWARES DE ERROR,
 * DICIENDO QUE NO HAN ENCONTRADO A ALGUIEN QUE SE HAGA CARGO DE ESA PETICIÓN
 */
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

/**
 * NOTAR QUE LOS MIDDLEWARES DE ERROR SE DIFERENCIAN POR QUE LLEVAN 4 PARÁMETROS
 * (err, req, res, next)
 */
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// aquí exporta 'app', al fin y al cabo 'app' es un módulo,
// por que 'www' lo ha cargado como un módulo.
// con lo cual el objeto 'app' que ha creado arriba le ha
// añadido cosas y lo exporta.
// vemos en 'www' como lo requiere este módulo ('app') para cargarlo
// y crea la conexión con esta 'app' --> "var server = http.createServer(app);"
// todo esto es lo que nos ha puesto nuestro 'EXPRESS GENERATOR'
module.exports = app;
