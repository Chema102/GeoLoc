
$('#search-tbn').click( () => {

    var ip = $('#ip-address').val();

    if(!ip) {

        $('#result').html('Por favor, introduce una dirección IP.');

    } else {

        $.ajax({
            url: 'http://ip-api.com/json/' + ip,
            dataType: 'jsonp',
            success: (data) => {
                $('#result').html('País: ' + data.country + ', Código del país: ' + data.countryCode);
            },
            error: () => {
                $('#result').html('Error al obtener la información. Asegúrate de que la dirección IP sea válida y de que no estés superando el límite de solicitudes al API.');
            }
        });

    }
});
