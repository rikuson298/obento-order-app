require 'rails_helper'

RSpec.describe Api::OrderUsersRelationsController, type: :controller do
  let!(:order) { create(:order, date: Time.zone.tomorrow) }
  let(:valid_attributes) {
    {
      order_id: order.id,
      user_id: nil,
      user_name: "hogepiyo",
      status: 0,
    }
  }
  let(:invalid_attributes) {
    {
      order_id: order.id,
      user_id: nil,
      user_name: nil,
      status: 0,
    }
  }
  let!(:order_users_relation) { create(:order_users_relation) }

  describe "GET #index" do
    it "returns a success response" do
      get :index, params: {}
      expect(response).to be_successful
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new OrderUsersRelation" do
        expect {
          post :create, params: {order_users_relation: valid_attributes}
        }.to change(OrderUsersRelation, :count).by(1)
      end

      it "renders a JSON response with the new order_users_relation" do
        post :create, params: {order_users_relation: valid_attributes}
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new order_users_relation" do
        post :create, params: {order_users_relation: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        skip("Add a hash of attributes valid for your model")
      }

      it "updates the requested order_users_relation" do
        put :update, params: {id: order_users_relation.to_param, order_users_relation: new_attributes}
        order_users_relation.reload
        skip("Add assertions for updated state")
      end

      it "renders a JSON response with the order_users_relation" do
        put :update, params: {id: order_users_relation.to_param, order_users_relation: valid_attributes}
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the order_users_relation" do
        put :update, params: {id: order_users_relation.to_param, order_users_relation: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested order_users_relation" do
      expect {
        delete :destroy, params: {id: order_users_relation.to_param}
      }.to change(OrderUsersRelation, :count).by(-1)
    end
  end

end
