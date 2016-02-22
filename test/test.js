describe('Filters', function(){

    //Loading module
    beforeEach(module('MyApp'));
    
    describe('reverse', function() {
        var reverseFilter;
        
        beforeEach(inject(function($filter){
            reverseFilter = $filter('reverse', {});
        }));
        
        it("should reverse a string", function(){
            expect(reverseFilter('nirmal')).toBe('lamrin');
        });
    });
});


//describe('Filters', function(){ //describe your object type
//    beforeEach(module('MyApp')); //load module
//    
//    describe('reverse',function(){ //describe your app name
//    
//        var reverse;    
//        beforeEach(inject(function($filter){ //initialize your filter
//            reverse = $filter('reverse',{});
//        }));
//        
//        it('Should reverse a string', function(){  //write tests
//            expect(reverse('rahil')).toBe('lihar'); //pass
//            expect(reverse('don')).toBe('nod'); //pass
//            expect(reverse('jam')).toBe('oops'); // this test should fail
//        }); 
//    
//    });
//    
//});
