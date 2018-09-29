# == Schema Information
#
# Table name: orders
#
#  id          :bigint(8)        not null, primary key
#  date        :date             not null
#  day_of_week :integer          default("sunday"), not null
#  status      :integer          default("acceptable"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryBot.define do
  factory :order do
    date { Time.zone.today }
    day_of_week { 1 }
    status { 0 }
  end
end
