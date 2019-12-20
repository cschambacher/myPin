class ChangeRemoveauthorindexinpins < ActiveRecord::Migration[5.2]
  def change
    remove_index :pins, :author_id
    add_index :pins, :author_id
  end
end
