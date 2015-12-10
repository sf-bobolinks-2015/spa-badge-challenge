Rails.application.routes.draw do
  resources :votes, only: :create
  resources :students, only: [:index, :create, :show]
  resources :badges, only: :create

  root 'students#index'
end
