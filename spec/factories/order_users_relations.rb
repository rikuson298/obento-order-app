FactoryBot.define do
  factory :order_users_relation do
    association :order, factory: :order
    user_id { nil }
    user_name { "hogepiyo" }
    status { 0 }
  end
end
