class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.date :date, null: false
      t.integer :day_of_week, default: 0, null: false
      t.integer :status, default: 0, null: false

      t.timestamps
    end
    add_index :orders, %i"date", unique: true
  end
end
