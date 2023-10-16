//1. Import area



//2. Defination area



async function GET() {

    //await


    // every function return something
    const min = 124;
    const max = 126;
    const stockPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2));

    return Response.json({
        price: stockPrice,
    });
}




//3. Export area

module.exports = { GET: GET };