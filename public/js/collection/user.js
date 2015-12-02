var app = app || {};

(function() {
    var users = Backbone.Collection.extend({
        url: '/users/me',
        model: app.UserModel,
        testing: function()
        {
        	this.fetch({
        		success: function()
        		{
        			console.log('test successful');
        		},
        		error: function()
        		{
        			console.log('error in testing')
        		}
        	})
        },
        login: function(usr, pwd)
        {
        	var self = this;

        	$.ajax({
        		url: 'users/login',
        		type: 'POST',
        		contentType: 'application/json',
        		data: JSON.stringify({username: usr, password: pwd}),
        		success: function(data){
        			self.trigger('logged_in');
        		},
        		error: function(a, b, c){
        			self.trigger('not_logged_in');
        		}
        	});
        },
        signup: function(usr, pwd, confirmPwd)
        {
        	var self = this;
        	
        	$.ajax({
        		url: 'users/signup',
        		type: 'POST',
        		contentType: 'application/json',
        		data: JSON.stringify({username: usr, password: pwd}),
        		success: function(data){
        			// self.trigger('logged_in');
        		},
        		error: function(a, b, c){
        			self.trigger('not_logged_in');
        		}
        	});
        },
        isLoggedIn: function()
        {
        	var self = this;
        	this.fetch({
        		success: function(model) {
        			self.trigger('logged_in');
        		},
        		error: function()
        		{
        			self.trigger('not_logged_in');
        		}
        	});
        }
    });

    app.Users = new users();
})();