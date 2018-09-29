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

require 'rails_helper'

RSpec.describe OrderUsersRelation, type: :model do
  xdescribe '#bulk_create' do
    subject { OrderUsersRelation.bulk_create(orderIds, user_name) }
    it 'return http success' do
    end
  end 
end
