let Count = 0;
let sum = 0;
let cart = {};

if ( localStorage.getItem( "Count" ) )
{
    Count = parseInt( localStorage.getItem( "Count" ) );
}

if ( localStorage.getItem( "sum" ) )
{
    sum = parseInt( localStorage.getItem( "sum" ) );
}

if ( localStorage.getItem( "cart" ) )
{
    cart = JSON.parse( localStorage.getItem( "cart" ) );
}

updateCart();

let btns = document.querySelectorAll( ".add-to-cart button" );

for ( let i = 0; i < btns.length; i++ )
{
    let btn = btns[ i ];
    btn.addEventListener( "click", add );
}

function add ( event )
{
    let price = Number( event.target.dataset.price );
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;

    if ( id in cart )
    {
        cart[ id ].qty++;
    } else
    {
        let cartItem = {
            title: title,
            price: price,
            qty: 1
        };
        cart[ id ] = cartItem
    }

    Count++;
    sum += price;

    console.log( cart );
    localStorage.setItem( "cart", JSON.stringify( cart ) );
    updateCart();
}

function updateCart ()
{
    // document.getElementById( "sum" ).textContent = sum;
    // document.getElementById( "Count" ).textContent = Count;
    localStorage.setItem( "sum", sum );
    localStorage.setItem( "Count", Count );
}
