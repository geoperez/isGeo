var isGeo = require('./index');

describe('Testing isGeo', function(){
    it('should return true passing Geo', function(){
        expect(isGeo('Saul')).toBeTruthy();
    });

    it('should return false passing Google', function(){
        expect(isGeo('Goolge')).toBeFalsy();
    });
});
