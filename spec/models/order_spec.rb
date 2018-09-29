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

require 'rails_helper'

RSpec.describe Order, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
