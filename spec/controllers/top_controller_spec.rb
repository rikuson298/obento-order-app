require 'rails_helper'

RSpec.describe TopController, type: :controller do
  describe 'GET #index' do
    it 'return http success' do
      get :index
      expect(response.status).to eq 200
    end
  end
end
