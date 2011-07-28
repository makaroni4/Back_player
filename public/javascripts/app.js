var App = function () {
	
	var Block = Backbone.Model.extend({
		initialize: function(){
			console.log('block created');
		},
		
		url: function() {
			return '/posts/' + this.id;
		}
	});
	
	var BlockView = Backbone.View.extend({
		initialize: function() {
			this.model.view = this;
			
			this.template = _.template($('#block_template').html());
		},
		
		render: function() {
			return this.template(this.model.toJSON());
		}
	});
	
	var getPost = function(id) {
		console.log('loading', id);
		
		var post = new Block({ 'id' : id });
		post.fetch({
			success: function(model, response) {
				var postView = new BlockView({ model: post });
				
				$('.content').html(postView.render());
			}
		});
	}
	
	var AppRouter = Backbone.Router.extend({
        routes: {
            "/posts/:id": 'getPostRoute',
        },
        
        getPostRoute: getPost
    });
    


	$(document).ready(function(){
		var app_router = new AppRouter;
		Backbone.history.start();
		
		
		var links = $.map($('.nav > a'), function(v, k) {
			return $(v).attr('href');
		});
	
		function setupLinks() {
			$.each($('.nav > a'), function(k, v) {
				var original = $(v).attr('href');
				$(v).attr('href', '#' + original);
				
				$(v).removeAttr('data-remote');
			});
		}
		
		setupLinks();
	});
}();


