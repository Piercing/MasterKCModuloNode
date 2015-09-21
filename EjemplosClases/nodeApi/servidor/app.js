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
var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();


/**
 * TODOS ESTOS 'app' SON MIDDLEWARE A NIVEL DE APLICACIÓN
 */
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
/**
 * Built-in —> añaden funcionalidad estándar
 */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public2')));

/**
 * Third-party —> añaden funcionalidad de terceros,
 * EN ESTE CASO NO HAY NINGUNO
 */


/**
 * AQUÍ CARGAR LOS CONTROLADORES (routes y users),
 * ENGANCHANDO ASÍ MIS RUTAS A EXPRESS.
 * ACLARAR QUE A ROUTES Y A USERS LOS LLAMAMOS CONTROLADORES
 * CONCEPTUALMENT PERO NO DEJAN DE SER DOS MIDDLEWARES MÁS
 */
app.use('/', routes);
app.use('/users', users);


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


module.exports = app;
