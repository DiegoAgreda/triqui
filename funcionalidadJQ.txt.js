$(document).ready(function(){
    $(".moverImagen").draggable();
 
    $("#cuadro1").droppable({
        drop: function (event, ui) {
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
        }
    });
    $("#cuadro2").droppable({
        drop: function (event, ui) {
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
        }
    });
    $("#cuadro3").droppable({
        drop: function (event, ui) {
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
        }
    });
    $("#cuadro4").droppable({
        drop: function (event, ui) {
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
        }
    });
    $("#cuadro5").droppable({
        drop: function (event, ui) {
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
        }
    });
    $("#cuadro6").droppable({
        drop: function (event, ui) {
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
        }
    });
    $("#cuadro7").droppable({
        drop: function (event, ui) {
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
        }
    });
    $("#cuadro8").droppable({
        drop: function (event, ui) {
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
        }
    });
    $("#cuadro9").droppable({
        drop: function (event, ui) {
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
        }
    });
 
 })