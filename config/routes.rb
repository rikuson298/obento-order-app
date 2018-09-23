Rails.application.routes.draw do
  root 'top#index'

  namespace :api do
    resources :orders, only: %i"index create update destroy"
  end

  # get '*path', to: redirect('/')
end
