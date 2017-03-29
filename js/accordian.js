var category = 0;
var accordian = 0;

var accordianExpand = function(accordian, accordianHeight){	
	
	category = document.getElementsByClassName("category");
	var i;

	for (i = 0; i < category.length; i++) {
	  category[i].onclick = function() {
	    this.classList.toggle("active");
	    var list = this.firstElementChild;
	    if (list.style.maxHeight){
	      list.style.maxHeight = null;
	    } else {
	      list.style.maxHeight = list.scrollHeight + "px";
	      accordian.style.maxHeight = accordianHeight + list.scrollHeight + "px";
	    } 
	  }
	}
}

var mainaccordian = document.getElementsByClassName("accordian-toggler");
var toggle="close";

mainaccordian[0].onclick = function(){
	var icon = mainaccordian[0].firstElementChild;
	icon.classList.toggle("open");

	if(toggle == "close"){
     var leftColumn = this.nextElementSibling;
     accordian = leftColumn.firstElementChild;
     accordian.style.maxHeight = accordian.scrollHeight + "px";

      accordianExpand(accordian, accordian.scrollHeight);

      toggle = "open";
      } else{
      	var leftColumn = this.nextElementSibling;
	    var accordian = leftColumn.firstElementChild;
     	accordian.style.maxHeight = null;
      	toggle = "close";
      }
}

accordianExpand();