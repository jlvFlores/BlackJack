






let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosCosmputadora = 0;

// Referencias
const btnPedir = document.querySelector('#btnPedir')

const puntosHTML = document.querySelectorAll('small');

// crear deck
const clearDeck = () => {

    for( let i = 2; i <=10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo );
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) {
            deck.push( esp + tipo );
        }
    }

    deck = _.shuffle( deck );
    return deck;

} 

clearDeck();

//tomar carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay mas cartas en el deck';
    }

    const carta = deck.pop();
    return carta;
}

//pedirCarta();
const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;    
}




// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador

    
});