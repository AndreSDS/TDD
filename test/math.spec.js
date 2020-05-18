//const assert = require('assert');
const Math = require('../src/math.js');
const expect = require ('chai');
const sinon = require ('sinon');

let val = 0;

describe('math class', function(){
    //hooks
    beforeEach(function(){
        value = 0;
    });

    it('Soma dois números', function(done){
        const math = new Math();
        this.timeout(3000)

        val = 3;
        math.soma(val,5,(val)=>{
            expect(val).to.equal(8);
            done();
        });
    });

    it('Multiplica dois números', function(){
        const math = new Math();

        val = 4;
        expect(math.multiplica(val,5)).to.equal(20)
    });

    it.only('Chama o req da função soma com index e valores', function(){
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();
        math.printSoma(req, res, 5,5);

    });
});