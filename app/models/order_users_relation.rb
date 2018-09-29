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

  class << self
    def bulk_create(order_ids, user_name)
      created_ids = []
      order_ids.each do |id|
        order_users_relation = new(order_id: id, user_name: user_name)
        if order_users_relation.save!
          created_ids << id
        end
      end
      created_ids
    end
  end
end
