<?php
$url = 'http://umgapi.somee.com/api/productos';

//$SoliAPI = file_get_contents($url);
//echo $SoliAPI;
//$product = json_decode($SoliAPI, true);
//var_dump($product);


$productos = json_decode(file_get_contents($url), true);



foreach ($productos as $producto) {
    echo '<tr>';
    echo '<td>' . $producto['idProducto'] . '</td>';
    echo '<td>' . $producto['codigoBarra'] . '</td>';
    echo '<td>' . $producto['descripcion'] . '</td>';
    echo '<td>' . $producto['marca'] . '</td>';
    echo '<td>' . $producto['idCategoria'] . '</td>';
    echo '<td>' . $producto['precio'] . '</td>';
    echo '<td><button onclick="deleteProduct('. $producto['idProducto'] . ')" class="btn"><ion-icon name="trash-outline"></ion-icon></button>
    <button id="openModalBtn"  class="btn" onclick="toggleModal(
        '. $producto['idProducto'] . ' , 
        '. $producto['codigoBarra'] . ' ,
        '. $producto['idCategoria'] . ' ,
        '. $producto['precio'] . ' ,
        )" ><ion-icon name="create-outline"></ion-icon></button></td>';
    echo '</tr>';
}

?>
