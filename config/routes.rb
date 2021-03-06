Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :products, only: [:index, :show]
    resources :cart_items, only: [:create, :index, :update, :destroy]
    resources :reviews, only: [:create]
  end

  root "static_pages#root"
end
