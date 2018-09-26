class OrderUsersRelation < ApplicationRecord
  belongs_to :order

  validates :order_id, :user_name, :status, presence: true
  validates :order_id, uniqueness: {scope: %i"user_id"}
  validates :order_id, uniqueness: {scope: %i"user_name"}
end
