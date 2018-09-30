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

class Order < ApplicationRecord
  has_many :order_users_relations

  validates :date, :day_of_week, :status, presence: true
  validates :date, uniqueness: true

  enum day_of_week: {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  }
  enum status: { acceptable: 0, ordered: 1, not_ordered: 2 }

  APP_BORDER = 10

  def day_of_week_ja
    %w(日 月 火 水 木 金 土)[day_of_week_before_type_cast]
  end

  def cant_ordered!
    update(status: :not_ordered)
  end

  def to_json
    as_json({
      only: %i"id day_of_week status",
      methods: %i"day_of_week_ja",
      include: :order_users_relations
    }).merge({
      date: date.strftime("%-m/%-d"),
      app_border: APP_BORDER,
    })
  end
end
