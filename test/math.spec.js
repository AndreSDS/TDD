const assert = require('assert');
const Math = require('../src/math.js');

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
            assert.equal(val,8);
            done();
        });
    });

    it('Multiplica dois números', function(){
        const math = new Math();

        val = 4;
        assert.equal(math.multiplica(val,3), 12);
    });
});