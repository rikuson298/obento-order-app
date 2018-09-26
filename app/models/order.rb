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

  def day_of_week_ja
    %w(日 月 火 水 木 金 土)[day_of_week]
  end
end
