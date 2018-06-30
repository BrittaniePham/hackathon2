Rails.application.routes.draw do
  get 'carts/show'
  get 'carts/create'
  get 'carts/update'
  get 'carts/destroy'
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :menus do
      resources :items
    end
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
