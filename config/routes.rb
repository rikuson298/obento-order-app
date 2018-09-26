Rails.application.routes.draw do
  match '*path' => 'options_request#preflight', via: :options
  root 'top#index'

  namespace :api do
    resources :orders, only: %i"index create update destroy"
    resources :order_users_relations, only: %i"index create update destroy"
end

  # get '*path', to: redirect('/')
end
