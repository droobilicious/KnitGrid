
let selectedColour = "rgb(0, 0, 0)";


//knit object
function KnitGrid(columns=20, rows=20, selector) 
{

    this.columns = columns;   
    this.rows = rows;
    this.element = $( selector );
    this.offColour = "rgb(255, 255, 255)";
    this.data = []; //used to store the grid data

    //set the grid width
    $( this.element ).css( {
        'display' : 'inline-grid',
        'grid-gap': '1px',
        'grid-template-columns' : 'repeat(' + this.rows + ', 1fr)'
    });

    
    this.initialise = function(){
        let _this = this;
        let blockCount =  this.rows *  this.columns;

        for (let i = 0;i<blockCount;i++){
            $( '<div>' )
                .appendTo( this.element )
                .css('background-color', this.offColour)
                .click(function() {
                    let newColour = ($(this).css( 'background-color' ) == selectedColour) ?  _this.offColour : selectedColour;
                    $(this).css( 'background-color', newColour);    
                });
        }

    }

    //get the populated grid information (coordinates and colour)
    this.getInfo = function(){

        let outputData =[];

        //loop each grid item ( arrow function here maintains scope of 'this')
        $( this.element ).children().each((index, item) => {

             //if the grid block is not turned off then record it
            if ($( item ).css('background-color') != this.offColour){
                outputData.push({
                    coords :  [ index % this.columns,  Math.floor(index/this.rows) ],
                    colour: ($( item ).css('background-color'))
                });
                
            }

        });

        return outputData;

    }


    this.initialise();

    return this;
    

}


$(document).ready(function(){
   
    //set the inital selected colour
    $( "#selectedColour" ).css({ 'background-color' : selectedColour })  

    //create a colour selector
    const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black', 'white']
    colours.forEach(function(colour){

        $( '<div>' )
            .addClass('colour')
            .css({ 'background-color' : colour })      
            .appendTo("#colourSelector")
            .click(function(){ 
                selectedColour = $(this).css('background-color');
                $( "#selectedColour" ).css({ 'background-color' : selectedColour })  
            });
        
    });
    

    //create a grid
    const grid1 = new KnitGrid(20, 20, '#grid1' );

    $( '.btnProcess' ).click(function(){
       // do something
    })




    //create another grid
    const grid2 = new KnitGrid(5, 5, '#grid2' );




});
