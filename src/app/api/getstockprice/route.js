//1. Import area



//2. Defination area



async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const stockName = searchParams.get('stockName')

    //await


    // every function return something
    let min, max, stockPrice, resData;



    switch (stockName) {
        case 'idfc':
            min = 124;
            max = 126;
            stockPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2));
            resData = {
                //property:value
                stockName,
                price: stockPrice,
            }

            break;
        case 'icici':
            min = 800;
            max = 1000;
            stockPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2));
            resData = {
                //property:value
                stockName,
                price: stockPrice,
            }

            break;
        case 'hdfc':
            min = 1400;
            max = 1600;
            stockPrice = parseFloat((Math.random() * (max - min) + min).toFixed(2));
            resData = {
                //property:value
                stockName,
                price: stockPrice,
            }

            break;
        default:
            resData = {
                //property:value
                msg:'Invalid Stock Name'
            }
    }

    return Response.json(resData);
}




//3. Export area

module.exports = { GET: GET };