class Order < ApplicationRecord
  validates :name, :date, :status, presence: true
  validate :check_unique

  def check_unique
    if Order.where.not(id: id).where(name: name, date: date.beginning_of_day..date.end_of_day).exists?
      error.add(:name, '同じ日に同じ名前では登録できません')
    end
  end
end
