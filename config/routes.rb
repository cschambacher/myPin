Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index] do
      resources :pins, only: [:index]
      resources :boards, only: [:index]
    end

    resource :session, only: [:create, :destroy, :show]
    
    resources :pins, except: [:index]
    resources :boards, except: [:index] do
      patch :repin
    end

    resource :home, only: [] do
      get :index
    end
  end
  root "static_pages#root"
end
