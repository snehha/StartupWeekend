$(document).ready(function(){
	$('.donate_txt').on('click', function(event){
		event.preventDefault();
		var $template = $('<form id="donation-form" action="#">\
		        <div class="col-xs-12">\
		          <div class= "form-group form-wrapper">\
		            <div class="form-group">\
		              <label for="first-name">First Name:</label>\
		              <input id="first-name" type="text" class="form-control" placeholder="--First Name--"/>\
		            </div>\
		            <div class="form-group">\
		              <label for="last-name">Last Name:</label>\
		              <input id="last-name" type="text" class="form-control" placeholder="--Last Name--">\
		            </div>\
		            <div class="form-group">\
		              <label for="email-id">Email-Id:</label>\
		              <input id="email-id" type="text" class="form-control" placeholder="--Email-ID--">\
		            </div>\
		            <div class="form-group">\
		              <label for="phone-no">Phone Number</label>\
		              <input id="phone-no" type="text" class="form-control" placeholder="--Phone Number--">\
		            </div>\
		            <div class="form-group">\
		              <label for="donation-amount">Donation Amount ($)</label>\
		              <input type="number" id="donation-amount" class="form-control" min="1" placeholder="1">\
		            </div>\
		            <div class="col-xs-12">\
		              <input type="submit" id="submit-btn" value="Submit" class="floatR">\
		            </div>\
		          </div>\
		        </div>\
		      </form>')
		
		// var $donation_template = document.querySelector('#main-content').content;
		
		$.fancybox({
            'content'          : $template
        });
        return false;
	});

	$(document).on('submit', '#donation-form' ,function(event){
		event.preventDefault();
		$.fancybox.close();
		noty({
			text: 'Thank you for donating your amount',
			layout: 'bottomRight',
			type: 'information',
			timeout: 2000
		});

	});

});