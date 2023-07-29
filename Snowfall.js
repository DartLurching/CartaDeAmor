function heart() {
    // 1, define una plantilla de copo de nieve
    var flake = $("<div>").css({
        "position": "absolute",
        "color": "#fff"
    }).html("❤️");

    // Obtenga el ancho de la página, use este número para calcular, el valor de la izquierda cuando comienza el copo de nieve
    var documentWidth = $(document).width();

    // Obtiene la altura de la página, que es equivalente a la posición del eje Y cuando caen los copos de nieve
    var documentHieght = $(document).height();

    // Define la cantidad de milisegundos para generar un copo de nieve
    var millisec = 300 + 10 * Math.random();
    // 2, establece el primer temporizador, un temporizador periódico y genera un copo de nieve cada vez (milisegundos);
    setTimeout(function() {
        // Genera aleatoriamente el valor de left al principio de la caída del copo de nieve, que es equivalente a la posición del eje X al principio
        var startLeft = Math.random() * documentWidth;

        // Genera aleatoriamente el valor de left al final de la caída del copo de nieve, que es equivalente a la posición del eje X al final
        var endLeft = Math.random() * documentWidth;

        // Generar aleatoriamente el tamaño del copo de nieve
        var flakeSize = 25 + 30 * Math.random();

        // Genera aleatoriamente la duración de la caída de nieve
        var durationTime = 4000 + 7000 * Math.random();

        // Genera aleatoriamente la transparencia al comienzo de la caída del copo de nieve
        var startOpacity = 0.7 + 0.3 * Math.random();

        // Genera aleatoriamente la transparencia al final de la caída de los copos de nieve
        var endOpacity = 0.2 + 0.2 * Math.random();

        // 3. Clonar una plantilla de copo de nieve, definir el estilo inicial del copo de nieve y empalmarlo en la página
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "opacity": startOpacity,
            "font-size": flakeSize,
            "top": "-50px",
        }).animate({ // Ejecutar animación
            "left": endLeft,
            "opacity": endOpacity,
            "top": documentHieght
        }, durationTime, function() {
            // 4. Cuando caiga el copo de nieve, elimine el copo de nieve.
            $(this).remove(); 
        });
    }, millisec * Math.random());
};

function heart2() {
    // 1, define una plantilla de copo de nieve
    var flake = $("<div>").css({
        "position": "absolute",
        "color": "#fff"
    }).html("💖");

    // Obtenga el ancho de la página, use este número para calcular, el valor de la izquierda cuando comienza el copo de nieve
    var documentWidth = $(document).width();

    // Obtiene la altura de la página, que es equivalente a la posición del eje Y cuando caen los copos de nieve
    var documentHieght = $(document).height();

    // Define la cantidad de milisegundos para generar un copo de nieve
    var millisec = 6000 + 10 * Math.random();
    // 2, establece el primer temporizador, un temporizador periódico y genera un copo de nieve cada vez (milisegundos);
    setTimeout(function() {
        // Genera aleatoriamente el valor de left al principio de la caída del copo de nieve, que es equivalente a la posición del eje X al principio
        var startLeft = Math.random() * documentWidth;

        // Genera aleatoriamente el valor de left al final de la caída del copo de nieve, que es equivalente a la posición del eje X al final
        var endLeft = Math.random() * documentWidth;

        // Generar aleatoriamente el tamaño del copo de nieve
        var flakeSize = 25 + 30 * Math.random();

        // Genera aleatoriamente la duración de la caída de nieve
        var durationTime = 4000 + 7000 * Math.random();

        // Genera aleatoriamente la transparencia al comienzo de la caída del copo de nieve
        var startOpacity = 0.7 + 0.3 * Math.random();

        // Genera aleatoriamente la transparencia al final de la caída de los copos de nieve
        var endOpacity = 0.2 + 0.2 * Math.random();

        // 3. Clonar una plantilla de copo de nieve, definir el estilo inicial del copo de nieve y empalmarlo en la página
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "opacity": startOpacity,
            "font-size": flakeSize,
            "top": "-25px",
        }).animate({ // Ejecutar animación
            "left": endLeft,
            "opacity": endOpacity,
            "top": documentHieght
        }, durationTime, function() {
            // 4. Cuando caiga el copo de nieve, elimine el copo de nieve.
            $(this).remove(); 
        });
    }, millisec * Math.random());
};

function heart3() {
    // 1, define una plantilla de copo de nieve
    var flake = $("<div>").css({
        "position": "absolute",
        "color": "#fff"
    }).html("❣️");

    // Obtenga el ancho de la página, use este número para calcular, el valor de la izquierda cuando comienza el copo de nieve
    var documentWidth = $(document).width();

    // Obtiene la altura de la página, que es equivalente a la posición del eje Y cuando caen los copos de nieve
    var documentHieght = $(document).height();

    // Define la cantidad de milisegundos para generar un copo de nieve
    var millisec = 4000 + 10 * Math.random();
    // 2, establece el primer temporizador, un temporizador periódico y genera un copo de nieve cada vez (milisegundos);
    setTimeout(function() {
        // Genera aleatoriamente el valor de left al principio de la caída del copo de nieve, que es equivalente a la posición del eje X al principio
        var startLeft = Math.random() * documentWidth;

        // Genera aleatoriamente el valor de left al final de la caída del copo de nieve, que es equivalente a la posición del eje X al final
        var endLeft = Math.random() * documentWidth;

        // Generar aleatoriamente el tamaño del copo de nieve
        var flakeSize = 25 + 30 * Math.random();

        // Genera aleatoriamente la duración de la caída de nieve
        var durationTime = 4000 + 7000 * Math.random();

        // Genera aleatoriamente la transparencia al comienzo de la caída del copo de nieve
        var startOpacity = 0.7 + 0.3 * Math.random();

        // Genera aleatoriamente la transparencia al final de la caída de los copos de nieve
        var endOpacity = 0.2 + 0.2 * Math.random();

        // 3. Clonar una plantilla de copo de nieve, definir el estilo inicial del copo de nieve y empalmarlo en la página
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "opacity": startOpacity,
            "font-size": flakeSize,
            "top": "-50px",
        }).animate({ // Ejecutar animación
            "left": endLeft,
            "opacity": endOpacity,
            "top": documentHieght
        }, durationTime, function() {
            // 4. Cuando caiga el copo de nieve, elimine el copo de nieve.
            $(this).remove(); 
        });
    }, millisec * Math.random());
};
function kface() {
    // 1, define una plantilla de copo de nieve
    var flake = $("<div>").css({
        "position": "absolute",
        "color": "#fff"
    }).html("😚");

    // Obtenga el ancho de la página, use este número para calcular, el valor de la izquierda cuando comienza el copo de nieve
    var documentWidth = $(document).width();

    // Obtiene la altura de la página, que es equivalente a la posición del eje Y cuando caen los copos de nieve
    var documentHieght = $(document).height();

    // Define la cantidad de milisegundos para generar un copo de nieve
    var millisec = 4000 + 10 * Math.random();
    // 2, establece el primer temporizador, un temporizador periódico y genera un copo de nieve cada vez (milisegundos);
    setTimeout(function() {
        // Genera aleatoriamente el valor de left al principio de la caída del copo de nieve, que es equivalente a la posición del eje X al principio
        var startLeft = Math.random() * documentWidth;

        // Genera aleatoriamente el valor de left al final de la caída del copo de nieve, que es equivalente a la posición del eje X al final
        var endLeft = Math.random() * documentWidth;

        // Generar aleatoriamente el tamaño del copo de nieve
        var flakeSize = 25 + 30 * Math.random();

        // Genera aleatoriamente la duración de la caída de nieve
        var durationTime = 4000 + 7000 * Math.random();

        // Genera aleatoriamente la transparencia al comienzo de la caída del copo de nieve
        var startOpacity = 0.8 + 0.2 * Math.random();

        // Genera aleatoriamente la transparencia al final de la caída de los copos de nieve
        var endOpacity = 0.1 + 0.2 * Math.random();

        // 3. Clonar una plantilla de copo de nieve, definir el estilo inicial del copo de nieve y empalmarlo en la página
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "opacity": startOpacity,
            "font-size": flakeSize,
            "top": "-50px",
        }).animate({ // Ejecutar animación
            "left": endLeft,
            "opacity": endOpacity,
            "top": documentHieght
        }, durationTime, function() {
            // 4. Cuando caiga el copo de nieve, elimine el copo de nieve.
            $(this).remove(); 
        });
    }, millisec * Math.random());
};
function heart4() {
    // 1, define una plantilla de copo de nieve
    var flake = $("<div>").css({
        "position": "absolute",
        "color": "#fff"
    }).html("💗");

    // Obtenga el ancho de la página, use este número para calcular, el valor de la izquierda cuando comienza el copo de nieve
    var documentWidth = $(document).width();

    // Obtiene la altura de la página, que es equivalente a la posición del eje Y cuando caen los copos de nieve
    var documentHieght = $(document).height();

    // Define la cantidad de milisegundos para generar un copo de nieve
    var millisec = 4000 + 10 * Math.random();
    // 2, establece el primer temporizador, un temporizador periódico y genera un copo de nieve cada vez (milisegundos);
    setTimeout(function() {
        // Genera aleatoriamente el valor de left al principio de la caída del copo de nieve, que es equivalente a la posición del eje X al principio
        var startLeft = Math.random() * documentWidth;

        // Genera aleatoriamente el valor de left al final de la caída del copo de nieve, que es equivalente a la posición del eje X al final
        var endLeft = Math.random() * documentWidth;

        // Generar aleatoriamente el tamaño del copo de nieve
        var flakeSize = 25 + 30 * Math.random();

        // Genera aleatoriamente la duración de la caída de nieve
        var durationTime = 4000 + 7000 * Math.random();

        // Genera aleatoriamente la transparencia al comienzo de la caída del copo de nieve
        var startOpacity = 0.7 + 0.3 * Math.random();

        // Genera aleatoriamente la transparencia al final de la caída de los copos de nieve
        var endOpacity = 0.2 + 0.2 * Math.random();

        // 3. Clonar una plantilla de copo de nieve, definir el estilo inicial del copo de nieve y empalmarlo en la página
        flake.clone().appendTo($("body")).css({
            "left": startLeft,
            "opacity": startOpacity,
            "font-size": flakeSize,
            "top": "-50px",
        }).animate({ // Ejecutar animación
            "left": endLeft,
            "opacity": endOpacity,
            "top": documentHieght
        }, durationTime, function() {
            // 4. Cuando caiga el copo de nieve, elimine el copo de nieve.
            $(this).remove(); 
        });
    }, millisec * Math.random());
};

function startAnimation() {
    //Mandamos al inicio de la pagina
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    heart();
    heart2();
    heart3();
    heart4();
    kface();
    heart();
    heart2();
    heart3();
    heart4();
    kface();
    heart();
    heart2();
    heart3();
    heart4();
    kface();
    heart();
    heart2();
    heart3();
    heart4();
    kface();
    heart();
    heart2();
    heart3();
    heart4();
    kface();
    heart();
    heart2();
    heart3();
    heart4();
    kface();
}
