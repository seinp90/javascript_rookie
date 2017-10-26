angular.module('tobuyapp',[])
 .controller('ToPurchaseCtrl', function(){
	var tobuylist = this;
	tobuylist.tobuys = [
		{text:'learn AngularJS', done:true},
 		{text:'build an AngularJS app', done:false}];

	tobuylist.addtobuy = function(){
		tobuylist.tobuys.push({text:tobuylist.todoBuy,done:false});
		tobuylist.todoBuy = '';

	};

	tobuylist.remaining = function(){
		var account =0;
		angular.forEach(tobuylist.tobuys, function(tobuy){

		count += tobuy.done? 0:1 ;
	
	});
	return count;
	};

	tobuylist.archieve = function(){

		var oldTobuys = tobuylist.tobuys;
		tobuylist.tobuys = [];
		angular.forEach(oldTobuys, function(tobuy){
			if(!tobuy.done) tobuylist.tobuys.push(tobuy);


		});
	};
});
