Rails.application.routes.draw do
  devise_for :admins
  mount Ckeditor::Engine => '/ckeditor'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#welcome'
  resources :posts do
    collection do
      get :search
    end
  end
  get 'portfolio' => 'pages#portfolio'
  get 'about' => 'pages#about'
  get 'blog' => 'posts#index'
  get 'contact' => 'pages#contact'
end
