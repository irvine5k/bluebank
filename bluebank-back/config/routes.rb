Rails.application.routes.draw do
  resources :clients, only: [:create]

  resources :accounts, only: [:create, :index] do
    member do
      post :deposit
      post :withdraw
      post :transfer
      end
    end


end
