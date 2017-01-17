$(document).ready(function(){
	$("#selectField").on("change", function() {
		console.log($(this).val(),$(this))
		var selected= $(this);
		if (selected != "All") {

            rows.filter("[position=" + selected + "]").show();
            rows.not("[position=" + selected + "]").hide();
            var visibleRows = rows.filter("[position=" + selected + "]");
            addRemoveClass(visibleRows);
        } else {

            rows.show();
            addRemoveClass(rows);
        }

	})
});