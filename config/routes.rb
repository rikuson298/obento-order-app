Rails.application.routes.draw do
  match '*path' => 'options_request#preflight', via: :options
  root 'top#index'

  namespace :api do
    resources :orders, only: %i"index create update" do
      collection do
        get :show_by_date
      end
    end
    resources :order_users_relations, only: %i"index new create update destroy" do
      collection do
        post :bulk_create
      end
    end
end

  # get '*path', to: redirect('/')
end
