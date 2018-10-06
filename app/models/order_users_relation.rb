# == Schema Information
#
# Table name: order_users_relations
#
#  id         :bigint(8)        not null, primary key
#  order_id   :bigint(8)        not null
#  user_id    :bigint(8)
#  user_name  :string(255)      not null
#  status     :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class OrderUsersRelation < ApplicationRecord
  belongs_to :order

  validates :order_id, :user_name, :status, presence: true
  validates :order_id, uniqueness: {scope: %i"user_name"}
  validates :user_name, length: { in: 1..10 }
  validate :order_acceptable?, on: %i"create destroy"

  enum status: { not_receive: 0, received: 1 }

  def order_acceptable?
    if order_id.blank? || !order.acceptable?
      errors.add(:order_id, "この日付には注文の追加・削除はできません")
    end
  end

  class << self
    def bulk_create(order_ids, user_name)
      created_ids = []
      order_ids.each do |id|
        order_users_relation = create(
          order_id: id,
          user_name: user_name
        ) if !find_by(order_id: id, user_name: user_name).present?
        if order_users_relation.present?
          created_ids << id
        end
      end
      created_ids
    end
  end
end
