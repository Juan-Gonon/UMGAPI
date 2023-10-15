<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
  
    $id = $_GET['id'];

    $url = 'http://umgapi.somee.com/api/productos/' . $id;

    // Configuración de la solicitud
    $options = array(
        'http' => array(
            'method' => 'DELETE'
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
