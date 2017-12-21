$(document).ready(function(){
    $( 'h1' ).click( function () {
        // alert("Alarma!")
        $( 'p' ).css( 'color', 'red' )
        $( 'h1' ).hide();
    });

    $( 'p' ).hover( function () {
        $( 'h1' ).show();
    });

    $( '#toggle' ).click( function () {
        $( '#game' ).toggle();
    });

    $( '#slideDown' ).click( function () {
        $( '#game' ).slideDown()
    });

    $( '#slideUp' ).click( function () {
        $( '#game' ).slideUp();
    })
    $( '#slideToggle' ).click( function () {
        $( '#game' ).slideToggle();
        $( '#casinoShindle' ).slideToggle();
    })
    
    $( '#fadeIn' ).click( function () {
        $( '#game' ).fadeIn();
    })

    $( '#fadeOut' ).click( function () {
        $( '#game' ).fadeOut();
    })
    
    $( '#before' ).click( function () {
        $( this ).before( '<p>RUN!</p>' );
    })

    $( '#after' ).click( function () {
        $( this ).after( '<p>PUSH THE BORDERS!</p>' );
    })

    $( '#append' ).click( function () {
        $( '#game' ).after( '<img src="tesla.jpg" alt="">' );
        $( this ).html( 'Please do not push more than once!')
    })

    $( '#playbutton' ).click( function () {
        $( this ).html( 'Game Over' );
    })

    $( '#attr' ).click( function () {
        console.log ($( this ) .attr('class'));
    })

    $( '#go' ).hover( function () {
        $( this ).val( 'GOOOOOO!');
    })

    $( '#text' ).click( function () {
        console.log ($( '#wrapper' ).text ());
    })

    $( '#addClass' ).click( function () {
        $( '#topsection' ).addClass( 'red');
    })

    $( '#data' ).click( function () {
        $( '#go' ).data ( 'YES!', 999 );
        console.log ( $( '#go' ).data ());
    })

});

