class Api::OrderUsersRelationsController < Api::ApplicationController
  before_action :set_order_users_relation, only: [:update, :destroy]
  def index
    @order_users_relations = OrderUsersRelation.all

    render json: @order_users_relations
  end

  def create
    @order_users_relation = OrderUsersRelation.new(order_users_relation_params)
    if @order_users_relation.save
      render json: @order_users_relation, status: :created
    else
      render json: @order_users_relation.errors, status: :unprocessable_entity
    end
  end

  def update
    if @order_users_relation.update(order_users_relation_params)
      render json: @order_users_relation
    else
      render json: @order_users_relation.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @order_users_relation.destroy
  end

  private
    def set_order_users_relation
      @order_users_relation = OrderUsersRelation.find(params[:id])
    end

    def order_users_relation_params
      params.require(:order_users_relation).permit(:order_id, :user_id, :user_name, :status)
    end
end
