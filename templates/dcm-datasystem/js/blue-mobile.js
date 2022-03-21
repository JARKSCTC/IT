(function ( $ ) {
	$.fn.blueMobileMenu = function( options ) {
		var settings = $.extend({
            color: "#556b2f",
            backgroundColor: "white"
        }, options );

		var id = this.attr("id");
		var mobile = true;

		$("a[href$=" + id + "]").addClass("blueMobileMenuIcon").on("click", function() {
			$("#" + id).slideToggle();
		});

		this.addClass("blueMobileMenu");
		this.find("li").attr("class", "firstLevel");
		this.find("li ul li").attr("class", "secondLevel");
		this.find("li ul li ul li").attr("class", "thirdLevel");
		this.find("li ul li ul li ul li").attr("class", "fourthLevel");

		this.find("li").has("ul").addClass("closed").prepend("");

		if(mobile === true) {
			this.on("click", ".icon", function(e) {
				$(this).parent().find("ul").first().slideToggle();

				if( $(this).parent().hasClass("closed") ) {
					$(this).parent().removeClass("closed").addClass("open");
				}
				else {
					$(this).parent().removeClass("open").addClass("closed");
				}
					
				e.stopPropagation();
			});
		}

		return this;
	}
}( jQuery ));