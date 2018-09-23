class TopController < ActionController::Base
  def index
    render file: 'public/dist/index.html'
  end
end
