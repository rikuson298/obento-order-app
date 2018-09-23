class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.bigint :user_id
      t.string :name, null: false
      t.timestamp :date, null: false
      t.integer :status, default: 0, null: false

      t.timestamps
    end
    add_index :orders, %i"name date", unique: true
  end
end
