Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :accounts, only: [:create, :index] do
        member do
          post :deposit
          post :withdraw
          post :transfer
        end
      end
    end
  end

  root to: "home#index"

  post "refresh", controller: :refresh, action: :create
  post "signin", controller: :signin, action: :create
  post "signup", controller: :signup, action: :create
  delete "signin", controller: :signin, action: :destroy

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
