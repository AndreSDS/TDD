class Math{
    
    soma(a,b, callback){
        setTimeout(()=>{
            callback(a + b);
            }, 2500);
        };
    
    multiplica = (a,b) => a * b;

    printSoma(req, res, a , b){
        res.load('index', a + b);
    };

};
module.exports = Math;