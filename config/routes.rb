Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :menus do
      resources :items
    end
    resources :carts
    get 'page', to: 'items#page'
    get 'everything', to: 'carts#everything'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
