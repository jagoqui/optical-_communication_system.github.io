
var cont = 1;
function add_figure_matrix(aux = document.getElementById()) {
    var new_figure = document.createElement("figure");
    var new_img = document.createElement("img");
    var new_caption = document.createElement("caption")
    var new_text = document.createTextNode("");
    new_img.src = aux.firstChild.src;
    new_caption.textContent = aux.lastChild.textContent;
    new_text.textContent = aux.lastChild.textContent;
    new_caption.style.color = "red";
    new_caption.style.width = "2em"
    new_caption.style.fontStyle = "bold"
    new_caption.style.border = "1px solid black";
    new_caption.style.backgroundColor = "blue";
    // caption_hide();
    new_figure.appendChild(new_img);
    new_figure.appendChild(new_caption)
    new_figure.style.marginLeft = "0.1em";
    new_figure.style.margin = "0";
    new_figure.id = 'new_figure' + cont;
    new_figure.style.display = "inline-block";
    document.getElementById("matrix").appendChild(new_figure);
    document.getElementById("code_frame_text").appendChild(new_text);
    cont++;
}
function break_line_matrix() {
    var new_break_line = document.createElement("br");
    var new_break_line_2 = document.createElement("br");
    var new_text = document.createTextNode(" LINE END");
    var new_text_2 = document.createTextNode("*");
    document.getElementById("matrix").appendChild(new_text);
    document.getElementById("matrix").appendChild(new_break_line);
    document.getElementById("code_frame_text").appendChild(new_text_2);
    document.getElementById("code_frame_text").appendChild(new_break_line_2);
    cont += 2;
}
function decode(aux) {
    if (aux == "000" || aux == "001" || aux == "010" || aux == "011" || aux == "100" || aux == "101" || aux == "110" || aux == "111"){
        var str_folder_name = "../images/";
        var str_extesion_name = ".png";
        var str_src = str_folder_name + aux + str_extesion_name;
        var new_figure = document.createElement("figure");
        var new_img = document.createElement("img");
        var new_caption = document.createElement("figure");
        new_img.src = str_src;
        new_caption.textContent = aux;
        new_figure.appendChild(new_img);
        new_figure.appendChild(new_caption);
        add_figure_matrix(new_figure);
    }
    else{
        console.log("Input-error");
        // Mostrar cuadro de error
    }
    document.getElementById("rx_input_text").value=null;
    document.getElementById("rx_input_text").focus();
}
function delete_img_matrix() {
    matrix = document.getElementById("matrix");
    code_frame_text = document.getElementById("code_frame_text");
    if (matrix.hasChildNodes()) {
        matrix.removeChild(matrix.lastChild);
        code_frame_text.removeChild(code_frame_text.lastChild);
        cont--;
    }
}
function reset() {
    var matrix = document.getElementById("matrix");
    var code_frame_text = document.getElementById("code_frame_text");
    if (matrix.hasChildNodes()) {
        while (matrix.childNodes.length >= 1) {
            matrix.removeChild(matrix.firstChild);
            code_frame_text.removeChild(code_frame_text.firstChild);
        }
    }
    cont = 0;
    document.getElementById("caption_hide").textContent = "Show code caption";
}
function section_toggle(aux = document.getElementById()) {
    console.log(aux);
    if (aux.id== "TX") {
        reset();
        document.getElementById('types_celds_TX').style.display = 'inline-flex';
        document.getElementById('types_celds_RX').style.display = 'none';
    }else{
        reset();
        document.getElementById('types_celds_RX').style.display = 'inline-flex';
        document.getElementById('types_celds_TX').style.display = 'none';
        document.getElementById('rx_input_text').focus();
    }
}
function caption_hide(){
    var aux = document.getElementById("matrix").getElementsByTagName("caption");
    if (document.getElementById("caption_hide").textContent == "Show code caption") {
        for (var i = 0; i < aux.length; i++) {
            aux[i].style.display="block";
        }
        document.getElementById("caption_hide").textContent = "Hide code caption";
    } else {
        for (var i = 0; i < aux.length; i++) {
            aux[i].style.display = "none";
        }
        document.getElementById("caption_hide").textContent = "Show code caption";
    }
}
function copy_coded_matrix(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    try {
        var status = document.execCommand('copy');
        document.getElementById("rx_input_text");
        if (!status) {
            console.error("No se pudo copiar el texto");
        } else {
            console.log("El texto ahora está en el portapapeles");
        }
    } catch (err) {
        console.log('Uy, no se pudo copiar');
    }
    document.body.removeChild(aux);
}
