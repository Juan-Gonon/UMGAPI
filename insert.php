<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $url = 'http://umgapi.somee.com/api/productos';

    // Datos a enviar
    $data = array(
        'codigoBarra' => $_POST['codigo'],
        'descripcion' => $_POST['desc'],
        'marca' => $_POST['marca'],
        'idCategoria' => $_POST['categ'],
        'precio' => floatval($_POST['precio'])
    );

    // Configuración de la solicitud
    $options = array(
        'http' => array(
            'header' => "Content-type: application/json\r\n",
            'method' => 'POST',
            'content' => json_encode($data)
        )
    );

    // Crear el contexto de la solicitud
    $context = stream_context_create($options);

    // Realizar la solicitud
    $result = file_get_contents($url, false, $context);

    if ($result === false) {
        echo json_encode(array('success' => false));
    } else {
        echo json_encode(array('success' => true));
    }
}
?>