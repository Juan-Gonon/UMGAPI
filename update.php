<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {

    $json_data = file_get_contents("php://input");
    $datos = json_decode($json_data, true);

    $id = $datos['id'];
    $url = 'http://umgapi.somee.com/api/productos/' . $id;

     // Datos a enviar
     $data = array(
        'codigoBarra' => $datos['codigo'],
        'descripcion' => $datos['desc'],
        'marca' => $datos['marca'],
        'idCategoria' => $datos['categ'],
        'precio' => floatval($datos['precio'])
    );

    // Configuración de la solicitud
    $options = array(
        'http' => array(
            'header' => "Content-type: application/json\r\n",
            'method' => 'PUT',
            'content' => json_encode($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === false) {
        echo json_encode(array('success' => false));
    } else {
        echo json_encode(array('success' => true));
    }
} else {
    echo json_encode(array('error' => 'Método no permitido'));
}
?>
