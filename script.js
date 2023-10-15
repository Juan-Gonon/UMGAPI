//Mostrar Datos

    function MostrarDatos(){
        const url = 'proxy.php';
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    //console.log('Datos de la API:', xhr.responseText);
                    const productTable = document.getElementById('productTable');
                    productTable.innerHTML = xhr.responseText; 
                } else {
                    console.error('Error al obtener datos:', xhr.status);
                }
            }
        };

        xhr.open('GET', url, true);
        xhr.send();
    }

    //INSERTAR DATOS

    var formulario = document.getElementById('productForm');
   //console.log(formulario)

    formulario.addEventListener('submit', function(e){
        
        e.preventDefault();

        const codigoBarra = document.getElementById('codigoBar').value;
        const descripcion = document.getElementById('descrip').value;
        const marca =  document.getElementById('marcaa').value;
        const categoria = document.getElementById('categoriaa').value;
        const precio = document.getElementById('precioo').value;

        const url = 'insert.php';

        xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                   // console.log('Datos:', xhr.responseText);
                    alert('Producto insertado correctamente.');
                    MostrarDatos();
                    document.getElementById('productForm').reset();
                } else {
                    console.error('Error al obtener datos:', xhr.status);
                }
            }
        };

        xhr.send(`codigo=${codigoBarra}&desc=${descripcion}&marca=${marca}&categ=${categoria}&precio=${precio}`);

});

MostrarDatos();


//Elimiar DATOS

function deleteProduct(idProducto) {
    const xhr = new XMLHttpRequest();
    const url = `delete.php?id=${idProducto}`;

    xhr.open('DELETE', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Datos:', xhr.responseText);
            document.getElementById('productForm').reset();
            MostrarDatos();
        }
    };

    xhr.send();
}


//CREAR TABLA TOOGLE Y EDITAR 


function toggleModal(idProducto, codigoBarra, categoria, precio) {
    const modal = document.querySelector('.update-form');
    modal.classList.toggle('show');

    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModal');
    
    openModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);

    /*
    console.log(idProducto)
    console.log(codigoBarra)
    console.log(categoria)
    console.log(precio)
    */

    const codigo = document.getElementById('codigoB');
    const categ = document.getElementById('categoria');
    const precioo = document.getElementById('precio');

    codigo.value = codigoBarra;
    categ.value = categoria;
    precioo.value = precio;

    const form = document.getElementById('updateForm');
    //console.log(form);

    form.addEventListener('submit', function(e){
       //e.preventDefault();
    
        const codigoBarra = document.getElementById('codigoB').value;
        const descripcion = document.getElementById('desc').value;
        const marca =  document.getElementById('marca').value;
        const categoria = document.getElementById('categoria').value;
        const precio = document.getElementById('precio').value;
        const idProductoo = idProducto;

    
        url = 'update.php';
    
         fetch(url, {
             method: 'PUT',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                 id: idProductoo,
                 codigo: codigoBarra,
                 desc: descripcion,
                 marca: marca,
                 categ: categoria,
                 precio: precio
             })
         })
         .then(response => response.json())
         .then(data => {
            //console.log('Datos:', data);
             MostrarDatos();
             document.getElementById('updateForm').reset();
         })
         .catch(error => console.error('Error al obtener datos:', error));
    });
    


  }
  



//const cuerpo = document.getElementById('productTable');
//console.log(cuerpo);