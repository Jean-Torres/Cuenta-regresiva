const fecha = 'Fri Aug 16 2024 00:00:00 GMT-0500';

const cambiarPantalla = () => {
    const pantallas = document.querySelectorAll(".pantallas");
    pantallas.forEach(pantalla => {
        pantalla.style.display = "none";
    });
    document.querySelector(".mensaje").style.display = "block"
}

const getRemsintTime = deadLine => {
    let now = new Date();
    milisegundos = (new Date(deadLine) - now + 1000) / 1000;
    segundos = ("0" + Math.floor(milisegundos % 60)).slice(-2);
    segundos = ("0" + Math.floor(milisegundos % 60)).slice(-2);
    minutos = ("0" + Math.floor(milisegundos / 60 % 60)).slice(-2);
    horas = ("0" + Math.floor(milisegundos / 3600 % 24)).slice(-2);
    days = ("0" + Math.floor(milisegundos / (3600 * 24))).slice(-2);

    return {
        milisegundos,
        segundos,
        minutos,
        horas,
        days
    }
}

const print = (dateFinish) => {
    const dias = document.querySelector('#dias');
    const horas = document.querySelector('#horas');
    const minutos = document.querySelector('#minutos');
    const segundos = document.querySelector('#segundos');

    const update = setInterval(() => {
        if (new Date() < new Date(dateFinish)) {
            let tiempo = getRemsintTime(dateFinish)
            dias.innerHTML = tiempo.days;
            horas.innerHTML = tiempo.horas;
            minutos.innerHTML = tiempo.minutos;
            segundos.innerHTML = tiempo.segundos;
            if (tiempo.days === '00' && tiempo.horas === '00' && tiempo.minutos === '00' && tiempo.segundos === '00') {
                cambiarPantalla();
            }
        }
    }, 1000);
}
if (new Date() < new Date(fecha)) {
    print(fecha);
} else {
    cambiarPantalla();
}
