$(document).ready(function(){
    $(".moverImagen").draggable({revert: "valid"});
 
    $("#cuadro1").droppable({
        
            drop: function (event, ui) {
                if ($("#cuadro1").html()==""){
                ui.draggable.addClass("dropped");
                $(this).append(ui.draggable);
            }
        }
    });

    $("#cuadro2").droppable({
        
        drop: function (event, ui) {
            if ($("#cuadro2").html()==""){
            ui.draggable.addClass("dropped");
            $(this).append(ui.draggable);
            }
        }
    });

$("#cuadro3").droppable({
        
    drop: function (event, ui) {
        if ($("#cuadro3").html()==""){
        ui.draggable.addClass("dropped");
        $(this).append(ui.draggable);
    }
}
});
$("#cuadro4").droppable({
        
    drop: function (event, ui) {
        if ($("#cuadro4").html()==""){
        ui.draggable.addClass("dropped");
        $(this).append(ui.draggable);
    }
}
});
$("#cuadro5").droppable({
        
    drop: function (event, ui) {
        if ($("#cuadro5").html()==""){
        ui.draggable.addClass("dropped");
        $(this).append(ui.draggable);
    }
}
});
$("#cuadro6").droppable({
        
    drop: function (event, ui) {
        if ($("#cuadro6").html()==""){
        ui.draggable.addClass("dropped");
        $(this).append(ui.draggable);
    }
}
});
$("#cuadro7").droppable({
        
    drop: function (event, ui) {
        if ($("#cuadro7").html()==""){
        ui.draggable.addClass("dropped");
        $(this).append(ui.draggable);
    }
}
});
$("#cuadro8").droppable({
        
    drop: function (event, ui) {
        if ($("#cuadro8").html()==""){
        ui.draggable.addClass("dropped");
        $(this).append(ui.draggable);
    }
}
});
$("#cuadro9").droppable({
        
    drop: function (event, ui) {
        if ($("#cuadro9").html()==""){
        ui.draggable.addClass("dropped");
        $(this).append(ui.draggable);
    }
}
});
 
 })