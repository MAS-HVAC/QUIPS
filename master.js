//initialize the grid
function initGrid() {
	var $grid = $('#grid');
	var html = [];
	var x, y, 
		X_MIN = 36,
		Y_MIN = 26,
		X_MAX = 228,
		Y_MAX = 130;
		
	for(y=Y_MAX; y>=Y_MIN; y-=2) {
	    html.push('<tr>')
	   	for(x=X_MIN; x<=X_MAX; x+=2) {
	    	html.push('<td class="defaultCell" data-x="'+x+'" data-y="'+y+'"></td>');	     	
	    }
	    html.push('</tr>');
	}
	$grid.empty();
	$grid.append(html.join(''));
};

//input selection
function inputSelection() {
	var unitType = $('#unitType').val(),
		unitWidth = $('#unitWidth').val(),
		unitHeight = $('#unitHeight').val(),
		fanSpacing = $('#fanSpacing').val();
		//performCalcs();
};

//clear selection
function clearSelection() {
	var unitType = $('#unitType').val(null),
		unitWidth = $('#unitWidth').val(null),
		unitHeight = $('#unitHeight').val(null),
		fanSpacing = $('#fanSpacing').val('1.8');
		initGrid();
};

//pass final calculation results to render all new information
function renderGrid() {
		var x = unitWidth,
			y = unitHeight;
		$('td[data-x="'+x+'"][data-y="'+y+'"]').attr('class','selectedCell');
};

//selection object function
var Selection = function(unitWidth, unitHeight) {
	this.unitWidth = unitWidth,
	this.unitHeight = unitHeight,
		
	Selection.prototype.info = function() {
		var testInfo = '<p>This object\'s id is: '+this.id+'</p>';
		return testInfo;
	};
};

/*basic function to change color of units on click
	$(function(){
			$('.selection-type-0').click(function(){
				$(this).css('background-color', 'white'); 
			});
		});
*/

/*
	//unavailable selection sizes
	document.getElementById("x36y26").className = "blackCell";
	document.getElementById("x228y130").className = "blackCell";
	document.getElementById("x86y28").className = "blackCell";
	document.getElementById("x144y46").className = "blackCell";
	document.getElementById("x144y82").className = "blackCell";
	document.getElementById("x144y82").className = "blackCell";
	document.getElementById("x228y82").className = "blackCell";
	document.getElementById("x64y130").className = "blackCell";
	document.getElementById("x36y74").className = "blackCell";
*/