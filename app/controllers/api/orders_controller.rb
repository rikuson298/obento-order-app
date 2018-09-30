class Api::OrdersController < Api::ApplicationController
  before_action :set_order, only: %i"update destroy"
  def index
    @orders = (0..13).map do |i|
      target_day = Time.zone.today + i
      next if target_day.saturday? || target_day.sunday?
      order = Order.find_or_create_by(date: target_day, day_of_week: target_day.wday)
      # XXX: 本日が注文されてなかったらnot_orderedに
      order.cant_ordered! if order.acceptable? && i == 0
      order.to_json
    end
    
    render json: @orders.compact, status: :ok
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      render json: @order, status: :created
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  def update
    if @order.update(order_params)
      render json: @order.to_json
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @order.destroy
  end

  private
    def set_order
      @order = Order.find(params[:id])
    end

    def order_params
      params.require(:order).permit(:user_id, :name, :date, :status)
    end
end
