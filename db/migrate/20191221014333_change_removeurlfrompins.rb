class ChangeRemoveurlfrompins < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :url
  end
end
