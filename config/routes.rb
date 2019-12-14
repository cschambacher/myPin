Rails.application.routes.draw do
  namespace :api do
    get 'sessions/create'
    get 'sessions/destroy'
  end
  namespace :api do
    get 'users/index'
    get 'users/show'
    get 'users/create'
    get 'users/destroy'
    get 'users/update'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
