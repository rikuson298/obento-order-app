class CreateOrderUsersRelations < ActiveRecord::Migration[5.2]
  def change
    create_table :order_users_relations do |t|
      t.bigint :order_id, null: false
      t.bigint :user_id
      t.string :user_name, null: false
      t.integer :status, default: 0, null: false

      t.timestamps
    end
    add_index :order_users_relations, %i"order_id user_id", unique: true
    add_index :order_users_relations, %i"order_id user_name", unique: true
  end
end
