$(document).ready(function(){
    
    let width=20;
    let height=20;
    let blockCount = width * height;
    let onColour = "rgb(0, 0, 0)";
    let offColour = "rgb(255, 255, 255)";

    $( '#biggrid' ).css( "grid-template-columns", "repeat(" + width + ", 1fr)" );

    for (let i = 0;i<blockCount;i++){
        $( '<div>' )
            .addClass('block')
            .appendTo( '#biggrid')
            .css('background-color', offColour)
            .click(function(){
                let newColour = $(this).css( 'background-color' ) == onColour ? offColour : onColour;
                $(this).css( 'background-color', newColour) ;
            });
    }


});
