Rails.application.routes.draw do
  root 'top#index'

  namespace :api do
    resources :foo, only: %i"index"
  end

  # get '*path', to: redirect('/')
end
