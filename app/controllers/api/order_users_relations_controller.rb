class Api::OrderUsersRelationsController < Api::ApplicationController
  before_action :set_order_users_relation, only: [:update, :destroy]
  def index
    @order_users_relations = OrderUsersRelation.all

    render json: @order_users_relations
  end

  def new
    @orders = (0..13).map do |i|
      target_day = Time.zone.today + i
      next if target_day.saturday? || target_day.sunday?
      order = Order.acceptable.find_by(date: target_day, day_of_week: target_day.wday)
      order.to_json if order.present?
    end
    render json: @orders.compact, status: :ok
  end

  def create
    @order_users_relation = OrderUsersRelation.new(order_users_relation_params)
    if @order_users_relation.save
      render json: @order_users_relation, status: :created
    else
      render json: @order_users_relation.errors, status: :unprocessable_entity
    end
  end

  def bulk_create
    if order_users_relation_params[:order_ids].blank?
      render(
        json: {
          message: '注文日を選択してください'
        },
        status: :unprocessable_entity
      )
    end
    created_ids = OrderUsersRelation.bulk_create(order_users_relation_params[:order_ids], order_users_relation_params[:user_name])
    if created_ids.present?
      render json: {order_ids: created_ids}, status: :created
    else
      render({
        json: {
          message: '予期せぬエラーが発生しました'
        },
        status: :unprocessable_entity
      })
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
      params.require(:order_users_relation)
        .permit(
          :order_id,
          :user_id,
          :user_name,
          :status,
          order_ids: [])
    end
end
