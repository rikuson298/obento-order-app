FactoryBot.define do
  factory :order do
    user_id { nil }
    name { "foo" }
    date { Time.zone.now }
    status { 0 }
  end
end
