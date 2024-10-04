// Función para cambiar entre pestañas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Ocultar todas las secciones con la clase "tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";  
    }

    // Remover la clase "active" de todas las pestañas
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostrar la sección actual
    document.getElementById(tabName).style.display = "block";

    // Añadir clase "active" a la pestaña seleccionada
    evt.currentTarget.className += " active";
}

// Inicializar la primera pestaña por defecto
window.onload = function() {
    document.getElementById('Inicio').style.display = 'block'; // Mostrar Inicio
    document.getElementById('menu-inicio').className += ' active'; // Activar Inicio en el menú
    setLanguage('es'); // Configurar el idioma predeterminado en español
};


// Función para cambiar entre idiomas
function setLanguage(language) {
    var elementsES = document.querySelectorAll('.es');
    var elementsEN = document.querySelectorAll('.en');

    // Cambiar nombres del menú también
    var menuInicio = document.getElementById('menu-inicio');
    var menuServicios = document.getElementById('menu-servicios');
    var menuMedios = document.getElementById('menu-medios');
    var menuContacto = document.getElementById('menu-contacto');

    if (!menuInicio || !menuServicios || !menuMedios || !menuContacto) {
        console.error("Error: No se encontraron los elementos del menú.");
        return;
    }

    if (language === 'es') {
        elementsES.forEach(function (element) {
            element.style.display = 'block';
        });
        elementsEN.forEach(function (element) {
            element.style.display = 'none';
        });

        // Cambiar el texto del menú a español
        menuInicio.innerText = 'Inicio';
        menuServicios.innerText = 'Servicios';
        menuMedios.innerText = 'En los Medios';
        menuContacto.innerText = 'Contacto';

    } else if (language === 'en') {
        elementsES.forEach(function (element) {
            element.style.display = 'none';
        });
        elementsEN.forEach(function (element) {
            element.style.display = 'block';
        });

        // Cambiar el texto del menú a inglés
        menuInicio.innerText = 'Home';
        menuServicios.innerText = 'Services';
        menuMedios.innerText = 'In the Media';
        menuContacto.innerText = 'Contact';
    }
}

// Inicializar el mapa de Google Maps
function initMap() {
    var despacho = { lat: 36.489393375262416, lng: -4.718904652777795 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: despacho
    });
    var marker = new google.maps.Marker({
        position: despacho,
        map: map
    });
}
