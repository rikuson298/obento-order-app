require 'rails_helper'

RSpec.describe Api::OrdersController, type: :controller do
  let(:valid_attributes) {
    {
      name: 'foo',
      date: Time.zone.now,
    }
  }

  let(:invalid_attributes) {
    {
      name: nil,
      date: Time.zone.now,
    }
  }

  describe "GET #index" do
    it "returns a success response" do
      order = Order.create! valid_attributes
      get :index, params: {}
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Order" do
        expect {
          post :create, params: {order: valid_attributes}
        }.to change(Order, :count).by(1)
      end

      it "renders a JSON response with the new order" do

        post :create, params: {order: valid_attributes}
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new order" do

        post :create, params: {order: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    let(:order) { create(:order) }
    context "with valid params" do
      let(:new_attributes) {
        {
          status: 1,
        }
      }

      it "updates the requested order" do
        put :update, params: {id: order.to_param, order: new_attributes}
        order.reload
        expect(order.status).to eq(1)
      end

      it "renders a JSON response with the order" do
        put :update, params: {id: order.to_param, order: new_attributes}
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the order" do
        put :update, params: {id: order.to_param, order: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested order" do
      order = Order.create! valid_attributes
      expect {
        delete :destroy, params: {id: order.to_param}
      }.to change(Order, :count).by(-1)
    end
  end
end
