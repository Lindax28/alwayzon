class AddIndexToProducts < ActiveRecord::Migration[5.2]
  def change
    add_index :products, :category
  end
end
