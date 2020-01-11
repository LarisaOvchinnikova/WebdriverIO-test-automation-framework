const assert = require('assert');
function sum (a, b){
    return a + b;
}

it('should sum equal 0', ()=>{
    assert.equal(sum(-5,5),0)
});
