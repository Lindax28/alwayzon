class AddKeywordsToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :keywords, :string, array: true, default: [], null: false
  end
end
