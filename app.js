// Función para cambiar entre pestañas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ocultar todas las secciones
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remover la clase "active" de todas las pestañas
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar la sección actual y agregar la clase "active" a la pestaña clickeada
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Función para cambiar entre idiomas
function setLanguage(language) {
    var elementsES = document.querySelectorAll('.es');
    var elementsEN = document.querySelectorAll('.en');

    // Cambiar nombres del menú también
    var menuInicio = document.getElementById('menu-inicio');
    var menuServicios = document.getElementById('menu-servicios');
    var menuMedios = document.getElementById('menu-medios');
    var menuContacto = document.getElementById('menu-contacto');

    if (language === 'es') {
        elementsES.forEach(function(element) {
            element.style.display = 'block';
        });
        elementsEN.forEach(function(element) {
            element.style.display = 'none';
        });

        // Cambiar el texto del menú a español
        menuInicio.innerText = 'Inicio';
        menuServicios.innerText = 'Servicios';
        menuMedios.innerText = 'En los Medios';
        menuContacto.innerText = 'Contacto';

    } else if (language === 'en') {
        elementsES.forEach(function(element) {
            element.style.display = 'none';
        });
        elementsEN.forEach(function(element) {
            element.style.display = 'block';
        });

        // Cambiar el texto del menú a inglés
        menuInicio.innerText = 'Home';
        menuServicios.innerText = 'Services';
        menuMedios.innerText = 'In the Media';
        menuContacto.innerText = 'Contact';
    }
}

// Inicializamos en español por defecto
window.onload = function() {
    setLanguage('es');
};

// Inicializar el mapa de Google Maps
function initMap() {
    var despacho = { lat: 36.507, lng: -4.688 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: despacho
    });
    var marker = new google.maps.Marker({
        position: despacho,
        map: map
    });
}

