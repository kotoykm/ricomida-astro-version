//Activar ToolTips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function () {
    //EL MODAL
    $("#enviarCorreo").click(function () {

        $("#modalCorreo").addClass("fade").modal('show');
    });

    $("#modalCorreo").on('hidden.bs.modal', function () {

    });

    //COLOR PARA LOS TITULOS
    $("h3").hover(function () {

        $("h3").css("user-select", "none");
        $("h3").css("cursor", "pointer");

    });


    $("h3").dblclick(function () {

        $("h3").css("color", "#DC3545");

    });


    $("h4").hover(function () {

        $("h4").css("user-select", "none");
        $("h4").css("cursor", "pointer");

    });


    $("h4").dblclick(function () {

        $("h4").css("color", "#DC3545");

    });
    //TOGGLE PARA LAS TARJETAS

    $(".card-titulo").hover(function () {

        $(".card-titulo").css("user-select", "none");
        $(".card-titulo").css("cursor", "pointer");

    });

    $(".card-titulo").click(function () {
        $(".card-text").toggle("slow");
    });


});