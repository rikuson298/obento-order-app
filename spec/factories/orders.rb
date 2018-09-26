FactoryBot.define do
  factory :order do
    date { Time.zone.today }
    day_of_week { 1 }
    status { 0 }
  end
end
