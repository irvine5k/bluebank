Rails.application.routes.draw do
  resources :users, only: [:create]
  
  resources :accounts, only: [:create] do
    member do
      post :deposit
      post :withdraw
      post :transfer
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
