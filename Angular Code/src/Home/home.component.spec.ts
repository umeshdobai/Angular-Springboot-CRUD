/*

*/
describe('hometest',()=>{

    let expected='';
    let notexpected='';

    beforeEach(()=>{

        expected='hometest'
        notexpected='hometest123'
    });
    afterEach(()=>{
        expected='hometest'
        notexpected='hometest123'

    });

    it('checks if hometest is hometest', 
    ()=>expect('hometest').toBe(expected)
    );
    it('checks if hometest is not hometest123', 
    ()=>expect('hometest').not.toMatch(notexpected)
    );

});
