class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def welcome
    @posts = Post.all
    @concerts = Concert.all
  end
end
