BackPlayerTemplate::Application.routes.draw do
  resources :concerts

  root :to => "application#welcome"
  resources :posts


end
