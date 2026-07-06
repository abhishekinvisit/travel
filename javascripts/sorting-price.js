
        $(document).ready(function() {
            // Grab all price items
            var priceItems = $('.resultsBox').toArray();

            // Sort price items by data-price attribute (ascending order)
            priceItems.sort(function(a, b) {
                var priceA = parseFloat($(a).data('price'));
                var priceB = parseFloat($(b).data('price'));
                return priceA - priceB; // Ascending order
            });

            // Append the sorted price items back to the container
            $('#resultsCntritems').empty().append(priceItems);
			$(".sorting_button button").click(function(){
			$(".sorting_button button").removeClass('active');
				$(this).addClass('active');
			});
			
			
        });