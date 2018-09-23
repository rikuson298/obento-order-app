class Api::FooController < Api::ApplicationController
  def index
    render json: { aaa: 1 }
  end
end
