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

FactoryBot.define do
  factory :order_users_relation do
    association :order, factory: :order
    user_id { nil }
    user_name { "hogepiyo" }
    status { 0 }
  end
end
