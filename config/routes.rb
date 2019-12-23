Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
      resources :pins, only: [:index]
      resources :boards, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :boards
    resources :pins do
      get :homeindex, on: :collection
    end
  end
  root "static_pages#root"
end
