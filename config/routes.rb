Rails.application.routes.draw do
  root 'site#index'

  namespace :api do
    namespace :v1 do
      resources :days, only: [:index, :update]
    end
  end
end
